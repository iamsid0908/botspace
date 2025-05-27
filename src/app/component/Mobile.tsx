"use client";
import { Box, Typography, Button, IconButton } from "@mui/material";
import {
  Home,
  Person,
  GridView,
  Send,
  Settings,
  MoreHoriz,
  Favorite,
  ChatBubbleOutline,
  Share,
  Bookmark,
  ArrowBack,
} from "@mui/icons-material";
import { useState } from "react";
import CustomDrawer from "./CustomDrawer";
import CommentsSection from "./CommenyDrawer";

const Mobile = ({
  post,
  conval,
}: {
  post?: any | undefined;
  conval?: string;
}) => {
  const [open, setOpen] = useState(false);
  const [comment, setComment] = useState(false);
  const comval1 = conval;

  if (!post) {
    return (
      <Box sx={{ p: 2 }}>
        <Typography>Select a post to preview it here.</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ position: "relative", display: "inline-block" }}>
      <Box
        sx={{
          width: 400,
          p: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            mb: 2,
          }}
        >
          <Typography variant="body2" color="text.secondary">
            Preview
          </Typography>
          <Button
            variant="contained"
            size="small"
            sx={{ textTransform: "none" }}
          >
            Go Live
          </Button>
        </Box>

        {/* Mobile Phone Mockup */}
        <Box
          sx={{
            width: 300,
            height: 600,
            bgcolor: "black",
            borderRadius: 6,
            p: 1,
            position: "relative",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "100%",
              bgcolor: "black",
              borderRadius: 5,
              overflow: "hidden",
              position: "relative",
            }}
          >
            {/* Mobile Header */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                p: 2,
                bgcolor: "black",
                color: "white",
              }}
            >
              <IconButton sx={{ color: "white" }}>
                <ArrowBack />
              </IconButton>
              <Box sx={{ textAlign: "center" }}>
                <Typography variant="caption" sx={{ color: "#888" }}>
                  BOTSPACEHQ
                </Typography>
                <Typography variant="body2" sx={{ fontWeight: 600 }}>
                  Posts
                </Typography>
              </Box>
              <IconButton sx={{ color: "white" }}>
                <MoreHoriz />
              </IconButton>
            </Box>

            {/* Post Content */}
            <Box sx={{ position: "relative" }}>
              {/* Post Image */}
              <Box
                sx={{
                  width: "100%",
                  height: comment ? 200 : 300,
                  backgroundImage: `url(${post.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  position: "relative",
                  transition: "height 0.3s ease",
                }}
              >
                {/* Post overlay content */}
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: "linear-gradient(transparent, rgba(0,0,0,0.7))",
                    p: 2,
                    color: "white",
                  }}
                >
                  {/* Action Buttons */}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      mt: comment ? 4 : 12,
                      mb: -1,
                      transition: "margin-top 0.3s ease",
                    }}
                  >
                    <Box
                      sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
                    >
                      <IconButton sx={{ color: "white", p: 0.5 }}>
                        <Favorite />
                      </IconButton>
                      <Typography variant="caption">
                        {post.noOfLikes}
                      </Typography>
                    </Box>
                    <Box
                      sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
                    >
                      <IconButton sx={{ color: "white", p: 0.5 }}>
                        <ChatBubbleOutline />
                      </IconButton>
                      <Typography variant="caption">
                        {post.noOfComments}
                      </Typography>
                    </Box>
                    <IconButton sx={{ color: "white", p: 0.5 }}>
                      <Share />
                    </IconButton>
                    <IconButton sx={{ color: "white", p: 0.5, ml: "auto" }}>
                      <Bookmark />
                    </IconButton>
                  </Box>

                  <Typography
                    variant="caption"
                    sx={{ display: "block", mt: 1, lineHeight: 1.3, mb: -9 }}
                  >
                    <strong>sid</strong> {post.caption}
                  </Typography>
                </Box>
              </Box>
            </Box>

            {/* Comments Section */}
            <CommentsSection
              isVisible={comment}
              onClose={() => setComment(false)}
              comval={comval1}
            />

            {/* Bottom Navigation */}
            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                bgcolor: "black",
                p: 2,
                zIndex: comment ? 0 : 1,
              }}
            >
              <Box
                sx={{ display: "flex", justifyContent: "space-around", mb: 2 }}
              >
                <IconButton sx={{ color: "white" }}>
                  <Home />
                </IconButton>
                <IconButton sx={{ color: "white" }}>
                  <GridView />
                </IconButton>
                <IconButton sx={{ color: "white" }}>
                  <Send />
                </IconButton>
                <IconButton sx={{ color: "white" }}>
                  <Person />
                </IconButton>
                <IconButton sx={{ color: "white" }}>
                  <Settings />
                </IconButton>
              </Box>

              {/* Tab Navigation */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  borderTop: "1px solid #333",
                  pt: 1,
                }}
              >
                <Typography
                  variant="caption"
                  sx={{
                    color: !comment && !open ? "white" : "#888",
                    fontWeight: !comment && !open ? 600 : 400,
                    cursor: "pointer",
                    "&:hover": { color: "white" },
                  }}
                  onClick={() => {
                    setComment(false);
                    setOpen(false);
                  }}
                >
                  Post
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    color: comment ? "white" : "#888",
                    fontWeight: comment ? 600 : 400,
                    cursor: "pointer",
                    "&:hover": { color: "white" },
                  }}
                  onClick={() => {
                    setComment(!comment);
                    setOpen(false);
                  }}
                >
                  Comments
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    color: open ? "white" : "#888",
                    fontWeight: open ? 600 : 400,
                    cursor: "pointer",
                    "&:hover": { color: "white" },
                  }}
                  onClick={() => {
                    setOpen(true);
                    setComment(false);
                  }}
                >
                  DM
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        {open && (
          <Box>
            <CustomDrawer
              open={open}
              onClose={() => setOpen(false)}
              title="Chat"
            />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Mobile;
