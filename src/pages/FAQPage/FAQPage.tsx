import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { QuizOutlined } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { dataFaq } from "./dataFaq";

export default function FAQPage() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        width: "100%",
        maxWidth: "95%",
        mx: "auto",
      }}
    >
      <Box sx={{ textAlign: "left", mb: 1 }}>
        <Typography
          variant="h5"
          sx={{
            fontWeight: 700,
            color: "primary.main",
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          <QuizOutlined /> Frequently Asked Questions
        </Typography>
        <Typography sx={{ fontSize: "14px", opacity: 0.7, mt: 0.5 }}>
          Everything you need to know about settings and account management.
        </Typography>
      </Box>

      {dataFaq.map((faq) => {
        return (
          <Accordion
            key={`faq${faq.id}`}
            disableGutters
            sx={{
              backgroundColor: "info.main",
              boxShadow: "rgb(0 0 0 / 8%) 0px 1px 4px",
              borderRadius: "10px !important",
              overflow: "hidden",
              transition: "box-shadow 0.2s ease, transform 0.2s ease",
              "&:hover": {
                boxShadow: "rgb(0 0 0 / 14%) 0px 4px 14px",
                transform: "translateY(-2px)",
              },
              "&::before": { display: "none" },
              "&.Mui-expanded": {
                boxShadow: "rgb(0 0 0 / 16%) 0px 6px 18px",
              },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "primary.main" }} />}
              sx={{
                minHeight: "72px",
                px: 3,
                borderLeft: "4px solid",
                borderLeftColor: "primary.main",
                "& .MuiAccordionSummary-content": {
                  my: "18px",
                  fontSize: "16px",
                  fontWeight: 600,
                },
                "&.Mui-expanded": {
                  backgroundColor: "rgba(128,128,128,0.05)",
                },
              }}
            >
              {faq.title}
            </AccordionSummary>
            <AccordionDetails
              sx={{
                textAlign: "left",
                px: 3,
                py: 2.5,
                fontSize: "15px",
                lineHeight: 1.7,
                opacity: 0.85,
                borderTop: "1px solid rgba(128,128,128,0.15)",
              }}
            >
              {faq.description}
            </AccordionDetails>
          </Accordion>
        );
      })}
    </Box>
  );
}
