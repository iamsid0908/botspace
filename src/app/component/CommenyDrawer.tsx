"use client";
import { Box, Typography, IconButton, TextField, Avatar } from "@mui/material";
import { Add, FavoriteBorder } from "@mui/icons-material";
import { useEffect, useState } from "react";

interface Comment {
  id: number;
  username: string;
  text: string;
  hasLiked: boolean;
}

interface CommentsSectionProps {
  isVisible?: boolean;
  onClose?: () => void;
  comval?: string;
}
const CommentsSection = ({
  isVisible,
  onClose,
  comval,
}: CommentsSectionProps) => {
  const [comments, setComments] = useState<Comment[]>([
    {
      id: 1,
      username: "Username",
      text: "Nice",
      hasLiked: true,
    },
  ]);
  const [newComment, setNewComment] = useState("");
  const [showComments, setShowComments] = useState(false);

  const emojis = ["❤️", "🙌", "🔥", "👏", "😢", "😍", "😮", "😂"];

  const handleAddComment = (text: string) => {
    const comment = {
      id: comments.length + 1,
      username: "You",
      text,
      hasLiked: false,
    };
    setComments((prev) => [...prev, comment]);
  };

  useEffect(() => {
    if (comval) {
      const comment: Comment = {
        id: comments.length + 1,
        username: "You",
        text: comval,
        hasLiked: false,
      };
      setComments((prev) => [...prev, comment]);
    }
  }, [comval]);

  const toggleLike = (commentId: number) => {
    setComments(
      comments.map((comment) =>
        comment.id === commentId
          ? { ...comment, hasLiked: !comment.hasLiked }
          : comment
      )
    );
  };

  if (!isVisible) return null;

  return (
    <Box
      sx={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        bgcolor: "black",
        color: "white",
        borderRadius: "20px 20px 0 0",
        maxHeight: "50%",
        overflow: "hidden",
        zIndex: 10,
      }}
    >
      {/* Comments Header */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: 2,
          borderBottom: "1px solid #333",
          position: "relative",
        }}
      >
        <Typography variant="body1" sx={{ fontWeight: 600 }}>
          Comments
        </Typography>
        <IconButton
          sx={{
            position: "absolute",
            right: 16,
            color: "white",
            transform: "rotate(45deg)",
          }}
          onClick={onClose}
        >
          <Add />
        </IconButton>
      </Box>

      {/* Comments List */}
      <Box
        sx={{
          maxHeight: "200px",
          overflowY: "auto",
          p: 2,
        }}
      >
        {comments.map((comment) => (
          <Box
            key={comment.id}
            sx={{
              display: "flex",
              alignItems: "flex-start",
              gap: 2,
              mb: 2,
            }}
          >
            <Avatar
              sx={{
                width: 32,
                height: 32,
                bgcolor: "#666",
                fontSize: "14px",
              }}
            >
              {comment.username[0].toUpperCase()}
            </Avatar>
            <Box sx={{ flex: 1 }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Typography
                  variant="body2"
                  sx={{ fontWeight: 600, fontSize: "14px" }}
                >
                  {comment.username}
                </Typography>
                <Typography
                  variant="caption"
                  sx={{ color: "#888", fontSize: "12px" }}
                >
                  Now
                </Typography>
              </Box>
              <Typography
                variant="body2"
                sx={{ color: "#ccc", fontSize: "14px", mt: 0.5 }}
              >
                {comment.text}
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  color: "#888",
                  fontSize: "12px",
                  mt: 0.5,
                  display: "block",
                  cursor: "pointer",
                }}
              >
                Reply
              </Typography>
            </Box>
            <IconButton
              sx={{
                color: comment.hasLiked ? "#ff4757" : "#666",
                p: 0.5,
              }}
              onClick={() => toggleLike(comment.id)}
            >
              <FavoriteBorder sx={{ fontSize: "16px" }} />
            </IconButton>
          </Box>
        ))}
      </Box>

      {/* Emoji Reactions */}
      <Box
        sx={{
          display: "flex",
          gap: 1,
          px: 2,
          py: 1,
          borderTop: "1px solid #333",
          borderBottom: "1px solid #333",
        }}
      >
        {emojis.map((emoji, index) => (
          <Box
            key={index}
            sx={{
              fontSize: "20px",
              cursor: "pointer",
              "&:hover": {
                transform: "scale(1.2)",
              },
              transition: "transform 0.2s",
            }}
          >
            {emoji}
          </Box>
        ))}
      </Box>

      {/* Comment Input */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          p: 2,
        }}
      >
        <IconButton
          sx={{
            bgcolor: "#333",
            color: "white",
            width: 32,
            height: 32,
            "&:hover": {
              bgcolor: "#444",
            },
          }}
        >
          <Add sx={{ fontSize: "18px" }} />
        </IconButton>
        <TextField
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment for username..."
          variant="outlined"
          size="small"
          fullWidth
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              handleAddComment(newComment);
            }
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              bgcolor: "transparent",
              color: "white",
              fontSize: "14px",
              "& fieldset": {
                border: "none",
              },
              "&:hover fieldset": {
                border: "none",
              },
              "&.Mui-focused fieldset": {
                border: "none",
              },
            },
            "& .MuiInputBase-input::placeholder": {
              color: "#888",
              opacity: 1,
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default CommentsSection;
