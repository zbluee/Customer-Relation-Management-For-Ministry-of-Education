import { Route, Routes } from "react-router-dom";
import { SupportHome } from "./ClientContainer/Home/SupportCenterHome/SupportHome";
import { Knowledgebase } from "./ClientContainer/Home/Knowledgebase/Knowledgebase";
import { OpenTicket } from "./ClientContainer/Home/Ticket/OpenNewTicket/OpenTicket";
import { CheckTicket } from "./ClientContainer/Home/Ticket/CheckTicketStatus/CheckTicket";
import { LoginPage } from "./ClientContainer/Admin/LoginPage/LoginPage";
import { AdminPage } from "./ClientContainer/Admin/Routes/AdminPage";
import { PageNotFound } from "./ClientContainer/Admin/Pages/PageNotFound/PageNotFound";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./ClientContainer/Admin/theme";
import { EmailSubmission } from "./ClientContainer/Admin/LoginPage/Email";
import { PasswordReset } from "./ClientContainer/Admin/LoginPage/PasswordReset";
export const App = () => {
  const [theme, colorMode] = useMode("light");
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<SupportHome />} />
          <Route path="/knowledgebase" element={<Knowledgebase />} />
          <Route path="/opennewticket" element={<OpenTicket />} />
          <Route path="/checkticketstatus" element={<CheckTicket />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/emailsubmission" element={<EmailSubmission />} />
          <Route path="/passwordreset" element={<PasswordReset />} />
          <Route path="/admin/*" element={<AdminPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};
