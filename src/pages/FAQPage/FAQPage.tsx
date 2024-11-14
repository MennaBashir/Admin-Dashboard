import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/material";
import { dataFaq } from "./dataFaq";

export default function FAQPage() {
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", gap: 3, width: "95%" }}
    >
      {dataFaq.map((faq) => {
        return (
          <Accordion
            key={`faq${faq.id}`}
            sx={{ boxShadow: "rgb(0 0 0 / 10%) 0px 1px 2px 0px",
          "&::before":{display:"none"} }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              {faq.title}
            </AccordionSummary>
            <AccordionDetails sx={{ textAlign: "left" }}>
              {faq.description}
            </AccordionDetails>
          </Accordion>
        );
      })}
    </Box>
  );
}
