import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { blogData } from "../utils/blogData/blogData";
import { Box, Typography, Container } from "@mui/material";

const RenderBlog = () => {
  const [blogDataToBeRendered, setBlogDataToBeRendered] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const blog = blogData.find((blog) => blog.id === parseInt(id));
    setBlogDataToBeRendered(blog);
  }, [id]);

  if (!blogDataToBeRendered) {
    return <Typography variant="h6">Loading...</Typography>;
  }

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      {/* Title and Date */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          {blogDataToBeRendered.title}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {blogDataToBeRendered.date}
        </Typography>
      </Box>

      {/* Hero Image */}
      <Box
        component="img"
        src={blogDataToBeRendered.heroImgUrl}
        alt={blogDataToBeRendered.title}
        sx={{
          width: "100%",
          height: "auto",
          borderRadius: 2,
          maxHeight: { xs: 200, sm: 300, md: 400 },
          objectFit: "cover",
          mb: 4,
        }}
      />

      {/* Blog Content */}
      <Box
        sx={{
          typography: "body1",
          color: "var(--primary-text-color)",
          wordBreak: "break-word",
          "& p": { mb: 2 },
          "& h2": { mt: 4, mb: 2 },
          "& h3": { mt: 3, mb: 1.5 },
          overflowX: "hidden",
          maxWidth: "100%",
          "& *": {
            maxWidth: "100% !important",
          },
        }}
        dangerouslySetInnerHTML={{ __html: blogDataToBeRendered.body }}
      />

      {/* Comment Form */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          mt: 4,
          mb: 4,
        }}
      >
      </Box>
    </Container>
  );
};

export default RenderBlog;
