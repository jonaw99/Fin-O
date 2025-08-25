import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Page from "@/app/dashboard/page.tsx";
import NewEntry from "@/app/dashboard/new-entry.tsx";

export default function App() {
    return (
        <Router basename="/Fin-O">
            <Routes>
                <Route path="/" element={<Page />} />
                <Route path="/dashboard" element={<Page />} />
                <Route path="/new-entry" element={<NewEntry />} />
            </Routes>
        </Router>
    );
}