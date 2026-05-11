import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Middleware for parsing JSON bodies
  app.use(express.json());

  // --- IremboGov Mock API ---

  app.get("/api/services", (req, res) => {
    res.json({
      family: [
        "Divorce Services",
        "Authentication for an orphan's status",
        "Certificate of Succession",
        "Certificate of Cohabitation",
        "Birth Services",
        "Marriage Services",
        "Adoption Services",
        "Guardianship Services"
      ],
      identification: [
        "National ID Application",
        "Passport Application",
        "Driving License",
        "Criminal Record Certificate",
        "Legal Status Certificate"
      ],
      land: [
        "Land Transfer",
        "Lease Extension",
        "Title Subdivision",
        "Title Merging"
      ]
    });
  });

  app.post("/api/auth/login", (req, res) => {
    const { email, password } = req.body;
    if (email && password) {
      res.json({ success: true, user: { name: "Test User", email } });
    } else {
      res.status(400).json({ success: false, message: "Missing credentials" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });
}

startServer();
