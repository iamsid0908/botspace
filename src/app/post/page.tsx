"use client";
import {
  Box,
  Paper,
  Typography,
  Button,
  Avatar,
  IconButton,
  Chip,
  Radio,
  Input,
  TextField,
} from "@mui/material";
import {
  Home,
  Person,
  GridView,
  Send,
  Settings,
  Notifications,
  MoreHoriz,
  Favorite,
  ChatBubbleOutline,
  Share,
  Bookmark,
  ArrowBack,
} from "@mui/icons-material";
import Mobile from "../component/Mobile";
import { useState } from "react";
import { Switch, Link } from "@mui/material";
import { Add as AddIcon, Info as InfoIcon } from "@mui/icons-material";

export default function PostPage() {
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState("");
  const [inputValue1, setInputValue1] = useState("");
  const [showPaper, setShowPaper] = useState(false);
  const [comval, setComval] = useState("");
  const [showDM, setShowDM] = useState(false);
  const [openingDMEnabled, setOpeningDMEnabled] = useState(true);
  const [customMessage, setCustomMessage] = useState("");

  const handleInsert = (token: string) => {
    setInputValue((prev) => `${prev} [${token}]`);
    if (!inputValue1) {
      setComval(inputValue1);
    } else {
      setComval(token);
    }
  };

  const data = [
    {
      id: "1",
      image:
        "https://images.unsplash.com/photo-1599302592205-d7d683c83eea?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJvcGljYWwlMjBzdW5zZXR8ZW58MHx8MHx8fDA%3D",
      noOfLikes: 124,
      noOfComments: 3,
      caption: "Had an amazing time at the beach! 🌊☀️ #vacayvibes",
      comments: [
        {
          id: "cmt1",
          name: "Alice Johnson",
          comment: "Looks like so much fun!",
        },
        { id: "cmt2", name: "Bob Smith", comment: "Wish I was there!" },
        { id: "cmt3", name: "Charlie Green", comment: "Stunning view 🔥" },
      ],
    },
    {
      id: "2",
      image:
        "https://media.istockphoto.com/id/1470927624/photo/long-exposure-of-the-business-bay-dubai-city-skyline-at-twilight-united-arab-emirates.jpg?s=612x612&w=0&k=20&c=nYzc5amAUoKd7jvQaW20zRmoGvu0amMnvSPqSdeQbIs=",
      noOfLikes: 98,
      noOfComments: 3,
      caption: "Sunsets and city lights 🌇",
      comments: [
        { id: "cmt1", name: "Nina Dobrev", comment: "Gorgeous shot!" },
        { id: "cmt2", name: "Tom Holland", comment: "What a view 😍" },
        { id: "cmt3", name: "Zendaya", comment: "This is amazing 🔥" },
      ],
    },
    {
      id: "3",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4g3mXSiwEYmCOcYNVNnmx_At4ZyDAD_MVxw&s",
      noOfLikes: 152,
      noOfComments: 3,
      caption: "Hiking through the wild 🌲🥾",
      comments: [
        { id: "cmt1", name: "Lara Croft", comment: "Nature is healing!" },
        { id: "cmt2", name: "Nathan Drake", comment: "Nice trail!" },
        { id: "cmt3", name: "Ellie", comment: "Looks peaceful 😊" },
      ],
    },
    {
      id: "4",
      image:
        "https://thumbs.dreamstime.com/b/stylish-creative-t-shirt-design-featuring-quote-i-turn-coffee-code-decorative-typography-perfect-365521101.jpg",
      noOfLikes: 89,
      noOfComments: 3,
      caption: "Caffeine + Code = ❤️ #DeveloperLife",
      comments: [
        { id: "cmt1", name: "Linus Torvalds", comment: "Preach!" },
        { id: "cmt2", name: "Grace Hopper", comment: "Classic combo 🔥" },
        { id: "cmt3", name: "Alan Turing", comment: "I approve ☕" },
      ],
    },
    {
      id: "5",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmpLgmMu2WfuUQXBrcN9uE1lzw8dfLnZ3R-A&s",
      noOfLikes: 77,
      noOfComments: 3,
      caption: "Homemade pizza night 🍕🍅🧀",
      comments: [
        { id: "cmt1", name: "Gordon Ramsay", comment: "Looks delicious!" },
        { id: "cmt2", name: "Jamie Oliver", comment: "Yum!" },
        {
          id: "cmt3",
          name: "Nigella Lawson",
          comment: "Can I get a slice? 😋",
        },
      ],
    },
  ];
  const selectedPost = data.find((post) => post.id === selectedPostId);

  return (
    <Box sx={{ display: "flex", minHeight: "100vh", bgcolor: "#f5f5f5" }}>
      {/* Left Sidebar */}
      <Box
        sx={{
          width: 60,
          bgcolor: "white",
          borderRight: "1px solid #e0e0e0",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          py: 2,
          gap: 2,
        }}
      >
        {/* Logo */}
        <Box
          sx={{
            width: 32,
            height: 32,
            bgcolor: "black",
            borderRadius: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontWeight: "bold",
            fontSize: 18,
          }}
        >
          m
        </Box>

        {/* Navigation Icons */}
        <IconButton sx={{ color: "#666" }}>
          <Home />
        </IconButton>
        <IconButton sx={{ color: "#666" }}>
          <Person />
        </IconButton>
        <IconButton sx={{ color: "#666" }}>
          <GridView />
        </IconButton>
        <IconButton sx={{ color: "#666" }}>
          <Send />
        </IconButton>
        <IconButton sx={{ color: "#666" }}>
          <Notifications />
        </IconButton>
        <IconButton sx={{ color: "#666" }}>
          <Settings />
        </IconButton>
      </Box>

      {/* Middle Content Area */}
      <Box sx={{ flex: 1, p: 3, maxWidth: 400 }}>
        <Box sx={{ mb: 3 }}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
            When someone comments on
          </Typography>

          <Paper sx={{ p: 2, mb: 2 }}>
            <Typography variant="body2" sx={{ mb: 2, fontWeight: 500 }}>
              a specific post or reel
            </Typography>

            {/* Post Thumbnails */}
            <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
              {data.map((item, index) => (
                <Box
                  key={item.id}
                  onClick={() => setSelectedPostId(item.id)}
                  sx={{
                    width: 60,
                    height: 60,
                    bgcolor: "#e0e0e0",
                    borderRadius: 1,
                    backgroundImage: `url(${item.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
              ))}
            </Box>

            <Button
              variant="text"
              sx={{ color: "#1976d2", textTransform: "none" }}
            >
              Show All
            </Button>
          </Paper>

          <Paper sx={{ p: 2, mb: 2 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Box
                sx={{
                  width: 20,
                  height: 20,
                  borderRadius: "50%",
                  border: "2px solid #ccc",
                }}
              />
              <Typography variant="body2">any post or reel</Typography>
              <Chip
                label="PRO"
                size="small"
                sx={{ bgcolor: "#1976d2", color: "white" }}
              />
            </Box>
          </Paper>

          <Paper sx={{ p: 2 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Box
                sx={{
                  width: 20,
                  height: 20,
                  borderRadius: "50%",
                  border: "2px solid #ccc",
                }}
              />
              <Typography variant="body2">next post or reel</Typography>
              <Chip
                label="PRO"
                size="small"
                sx={{ bgcolor: "#1976d2", color: "white" }}
              />
            </Box>
          </Paper>

          <Typography
            variant="h6"
            sx={{ mt: 4, mb: 2, fontWeight: 600, cursor: "pointer" }}
            onClick={() => setShowPaper(true)}
          >
            Next
          </Typography>
          {showPaper && (
            <Box>
              <Paper sx={{ p: 2 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Radio
                    value="option1"
                    sx={{
                      color: "#ccc",
                      "&.Mui-checked": {
                        color: "#08C1BB",
                      },
                    }}
                  />
                  <Typography variant="body2">
                    A specific word or words
                  </Typography>
                  <Chip
                    label="PRO"
                    size="small"
                    sx={{ bgcolor: "#1976d2", color: "white" }}
                  />
                </Box>

                <TextField
                  fullWidth
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Enter keywords"
                  sx={{ my: 2 }}
                />

                <Typography variant="body2">For example:</Typography>
                <Box sx={{ display: "flex", gap: 1, mt: 1 }}>
                  <Chip
                    label="[price]"
                    variant="outlined"
                    onClick={() => handleInsert("price")}
                    sx={{ cursor: "pointer" }}
                  />
                  <Chip
                    label="[country]"
                    variant="outlined"
                    onClick={() => handleInsert("country")}
                    sx={{ cursor: "pointer" }}
                  />
                </Box>
              </Paper>
              <Paper sx={{ p: 2 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Radio
                    value="option1"
                    sx={{
                      color: "#ccc",
                      "&.Mui-checked": {
                        color: "#08C1BB",
                      },
                    }}
                  />
                  <Typography variant="body2">A word or words</Typography>
                  <Chip
                    label="PRO"
                    size="small"
                    sx={{ bgcolor: "#1976d2", color: "white" }}
                  />
                </Box>

                <TextField
                  fullWidth
                  value={inputValue1}
                  onChange={(e) => setInputValue1(e.target.value)}
                  placeholder="Enter keywords"
                  sx={{ my: 2 }}
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      handleInsert(inputValue1);
                    }
                  }}
                />
              </Paper>
            </Box>
          )}
        </Box>
        {showPaper && (
          <Typography
            variant="h6"
            sx={{ mt: 4, mb: 2, fontWeight: 600, cursor: "pointer" }}
            onClick={() => setShowDM(true)}
          >
            Next
          </Typography>
        )}
        {showDM && (
          <Box
            sx={{
              maxWidth: 400,
              mx: "auto",
              p: 2,
              bgcolor: "#f5f5f5",
              minHeight: "100vh",
              fontFamily: "system-ui, -apple-system, sans-serif",
            }}
          >
            {/* Header */}
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                mb: 3,
                color: "#333",
                fontSize: "18px",
              }}
            >
              They will get
            </Typography>

            {/* Opening DM Toggle */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 3,
              }}
            >
              <Typography
                sx={{
                  color: "#666",
                  fontSize: "16px",
                }}
              >
                an opening DM
              </Typography>
              <Switch
                checked={openingDMEnabled}
                onChange={(e) => setOpeningDMEnabled(e.target.checked)}
                sx={{
                  "& .MuiSwitch-switchBase.Mui-checked": {
                    color: "#4caf50",
                  },
                  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                    backgroundColor: "#4caf50",
                  },
                }}
              />
            </Box>

            {/* Message Preview */}
            <Paper
              elevation={0}
              sx={{
                p: 2,
                mb: 2,
                bgcolor: "#e8e8e8",
                borderRadius: 2,
              }}
            >
              <Typography
                sx={{
                  color: "#333",
                  fontSize: "14px",
                  lineHeight: 1.4,
                  mb: 1,
                }}
              >
                Hey there! I'm so happy you're here, thanks so much for your
                interest 😊
              </Typography>
              <Typography
                sx={{
                  color: "#333",
                  fontSize: "14px",
                  lineHeight: 1.4,
                }}
              >
                Click below and I'll send you the link in just a sec 👇
              </Typography>
            </Paper>

            {/* Send Link Button */}
            <Button
              variant="contained"
              fullWidth
              sx={{
                mb: 2,
                bgcolor: "#666",
                color: "white",
                textTransform: "none",
                borderRadius: 2,
                py: 1.5,
                fontSize: "14px",
                "&:hover": {
                  bgcolor: "#555",
                },
              }}
            >
              Send me the link
            </Button>

            {/* Info Link */}
            <Box sx={{ mb: 3 }}>
              <Link
                href="#"
                sx={{
                  color: "#1976d2",
                  fontSize: "14px",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: 0.5,
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                <InfoIcon sx={{ fontSize: 16 }} />
                Why does an Opening DM matter?
              </Link>
            </Box>

            {/* DM with Link Section */}
            <Typography
              sx={{
                color: "#666",
                fontSize: "16px",
                mb: 2,
              }}
            >
              a DM with the link
            </Typography>

            {/* Custom Message Input */}
            <TextField
              fullWidth
              multiline
              rows={4}
              placeholder="Write a message"
              value={customMessage}
              onChange={(e) => setCustomMessage(e.target.value)}
              sx={{
                mb: 1,
                "& .MuiOutlinedInput-root": {
                  bgcolor: "#e8e8e8",
                  borderRadius: 2,
                  "& fieldset": {
                    border: "none",
                  },
                  "&:hover fieldset": {
                    border: "none",
                  },
                  "&.Mui-focused fieldset": {
                    border: "1px solid #1976d2",
                  },
                },
                "& .MuiInputBase-input": {
                  fontSize: "14px",
                  color: "#666",
                },
                "& .MuiInputBase-input::placeholder": {
                  color: "#999",
                  opacity: 1,
                },
              }}
            />

            {/* Helper Text */}
            <Typography
              sx={{
                color: "#999",
                fontSize: "12px",
                mb: 3,
              }}
            >
              Create the DM you'd like to send
            </Typography>

            {/* Add Link Button */}
            <Button
              variant="outlined"
              fullWidth
              startIcon={<AddIcon />}
              sx={{
                color: "#666",
                borderColor: "#ccc",
                textTransform: "none",
                borderRadius: 2,
                py: 1.5,
                fontSize: "14px",
                "&:hover": {
                  borderColor: "#999",
                  bgcolor: "transparent",
                },
              }}
            >
              Add A Link
            </Button>
          </Box>
        )}
      </Box>

      {/* Right Mobile Preview Area */}
      <Box>
        <Mobile post={selectedPost} conval={comval} />
      </Box>
    </Box>
  );
}
