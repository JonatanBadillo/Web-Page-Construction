import React, { useState } from "react";
import { TextField, Button, Card, CardContent, Typography, Box } from "@mui/material";

const Comments = () => {
  const [comments, setComments] = useState<string[]>([]);
  const [comment, setComment] = useState("");

  const handleCommentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setComment(event.target.value);
  };

  const handleCommentSubmit = () => {
    if (comment.trim() !== "") {
      setComments([...comments, comment]);
      setComment("");
    }
  };

  return (
    <Box sx={{ padding: 3, backgroundColor: "#f4f4f4", marginTop: 3, borderRadius: 2 }}>
      <Typography variant="h4" gutterBottom>Comments</Typography>
      <TextField
        fullWidth
        variant="outlined"
        label="Write a comment..."
        value={comment}
        onChange={handleCommentChange}
        multiline
        rows={4}
        sx={{ marginBottom: 2 }}
      />
      <Button variant="contained" color="primary" onClick={handleCommentSubmit}>
        Post Comment
      </Button>
      <Box sx={{ marginTop: 3 }}>
        {comments.map((comment, index) => (
          <Card key={index} sx={{ marginBottom: 2 }}>
            <CardContent>
              <Typography variant="body1">{comment}</Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default Comments;