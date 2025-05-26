"use client";
import type React from "react";
import { useState } from "react";

import {
  Box,
  Typography,
  IconButton,
  Avatar,
  TextField,
  Paper,
} from "@mui/material";
import {
  ArrowBack,
  Call,
  VideoCall,
  Send,
  Add,
  CameraAlt,
  Mic,
} from "@mui/icons-material";

interface Message {
  id: number;
  text: string;
  sender: "user" | "other";
  timestamp: string;
}

interface CustomDrawerProps {
  open: boolean;
  onClose: () => void;
  title: string;
  children?: React.ReactNode;
}

const CustomDrawer = ({ open, onClose, title }: CustomDrawerProps) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hey there! I'm so happy you're here, thanks so much for your interest ❤️",
      sender: "other",
      timestamp: "1:37",
    },
    {
      id: 2,
      text: "Click below and I'll send you the link in just a sec ⬇️",
      sender: "other",
      timestamp: "1:37",
    },
    {
      id: 3,
      text: "Send me the link",
      sender: "user",
      timestamp: "1:37",
    },
    {
      id: 4,
      text: "Hey",
      sender: "other",
      timestamp: "1:38",
    },
  ]);

  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage: Message = {
        id: messages.length + 1,
        text: message,
        sender: "user",
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      setMessages([...messages, newMessage]);
      setMessage("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Custom Drawer */}
      <Box
        sx={{
          position: "absolute",
          top: 80,
          right: open ? 58 : "-300px",
          width: 285,
          height: 545,
          bgcolor: "#000",
          color: "white",
          zIndex: 1000,
          transition: "right 0.3s ease-in-out",
          display: "flex",
          flexDirection: "column",
          borderRadius: "0 0 0 16px",
          overflow: "hidden",
        }}
      >
        {/* Chat Header */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            p: 2,
            borderBottom: "1px solid #333",
            bgcolor: "#000",
          }}
        >
          <IconButton onClick={onClose} sx={{ color: "white", mr: 1 }}>
            <ArrowBack />
          </IconButton>

          <Avatar
            sx={{ width: 32, height: 32, mr: 2 }}
            src="/placeholder.svg?height=32&width=32"
          >
            B
          </Avatar>

          <Box sx={{ flex: 1 }}>
            <Typography variant="body2" sx={{ fontWeight: 600 }}>
              botspacehq
            </Typography>
          </Box>

          <IconButton sx={{ color: "white", mr: 1 }}>
            <Call />
          </IconButton>
          <IconButton sx={{ color: "white" }}>
            <VideoCall />
          </IconButton>
        </Box>

        {/* Messages Area */}
        <Box
          sx={{
            flex: 1,
            p: 2,
            overflowY: "auto",
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          {messages.map((msg) => (
            <Box
              key={msg.id}
              sx={{
                display: "flex",
                justifyContent:
                  msg.sender === "user" ? "flex-end" : "flex-start",
                alignItems: "flex-start",
                gap: 1,
              }}
            >
              {msg.sender === "other" && (
                <Avatar sx={{ width: 24, height: 24 }}>B</Avatar>
              )}

              <Box
                sx={{
                  maxWidth: "70%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: msg.sender === "user" ? "flex-end" : "flex-start",
                }}
              >
                <Paper
                  sx={{
                    p: 1.5,
                    bgcolor: msg.sender === "user" ? "#007AFF" : "#333",
                    color: "white",
                    borderRadius: 2,
                    borderTopLeftRadius: msg.sender === "other" ? 0.5 : 2,
                    borderTopRightRadius: msg.sender === "user" ? 0.5 : 2,
                  }}
                >
                  <Typography variant="body2" sx={{ lineHeight: 1.4 }}>
                    {msg.text}
                  </Typography>
                </Paper>

                <Typography
                  variant="caption"
                  sx={{ color: "#888", mt: 0.5, fontSize: "0.7rem" }}
                >
                  {msg.timestamp}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>

        {/* Message Input */}
        <Box
          sx={{
            p: 2,
            borderTop: "1px solid #333",
            bgcolor: "#000",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              bgcolor: "#1a1a1a",
              borderRadius: 3,
              p: 1,
            }}
          >
            <IconButton size="small" sx={{ color: "#888" }}>
              <Add />
            </IconButton>

            <IconButton size="small" sx={{ color: "#888" }}>
              <CameraAlt />
            </IconButton>

            <TextField
              fullWidth
              placeholder="Message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              variant="standard"
              InputProps={{
                disableUnderline: true,
                sx: {
                  color: "white",
                  fontSize: "0.9rem",
                  "& input::placeholder": {
                    color: "#888",
                    opacity: 1,
                  },
                },
              }}
            />

            <IconButton size="small" sx={{ color: "#888" }}>
              <Mic />
            </IconButton>

            {message.trim() && (
              <IconButton
                size="small"
                onClick={handleSendMessage}
                sx={{ color: "#007AFF" }}
              >
                <Send />
              </IconButton>
            )}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default CustomDrawer;
