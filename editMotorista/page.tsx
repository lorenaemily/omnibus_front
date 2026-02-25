"use client";

import { useState } from "react";
import { Montserrat } from "next/font/google";
import { Bell, UserCircle } from "lucide-react";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function EditarMotorista() {
  const [form, setForm] = useState({
    nome: "José Bonifácio Sombra",
    email: "jose@gmail.com",
    telefone: "+55 88 94002-8922",
    cnh: "0123456789",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
  };

  const navLinkStyle = {
    fontSize: "14px",
    fontWeight: 700,
    color: "#1a2b6d",
    textDecoration: "none",
    letterSpacing: "0.05em",
  } as React.CSSProperties;

  return (
    <main
      className={montserrat.className}
      style={{ minHeight: "100vh", background: "#fff", display: "flex", flexDirection: "column" }}
    >
      {/* NAVBAR */}
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "16px 32px",
          borderBottom: "1px solid #e5e5e5",
        }}
      >
        <div style={{ display: "flex", gap: "32px" }}>
          <a href="#" style={navLinkStyle}>DASHBOARD</a>
          <a href="#" style={navLinkStyle}>FINANCEIRO</a>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <Bell size={22} color="#1a2b6d" style={{ cursor: "pointer" }} />
          <div
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              background: "#1a2b6d",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <UserCircle size={22} color="#fff" />
          </div>
        </div>
      </nav>

      {/* CONTENT */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "48px 24px",
        }}
      >
        <h1
          style={{
            fontSize: "22px",
            fontWeight: 800,
            color: "#1a2b6d",
            letterSpacing: "0.06em",
            marginBottom: "28px",
          }}
        >
          EDITAR MOTORISTA
        </h1>

        <div
          style={{
            background: "#fff",
            border: "1px solid #ddd",
            borderRadius: "10px",
            padding: "32px 32px 36px",
            width: "100%",
            maxWidth: "460px",
            boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
          }}
        >
          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <label style={{ fontSize: "12px", fontWeight: 700, color: "#1a2b6d", letterSpacing: "0.07em" }}>NOME</label>
              <input
                type="text"
                name="nome"
                value={form.nome}
                onChange={handleChange}
                style={{ background: "#f5f5f5", border: "none", borderRadius: "6px", padding: "12px 14px", fontSize: "14px", color: "#333", outline: "none", fontFamily: "inherit" }}
                onFocus={(e) => (e.target.style.boxShadow = "0 0 0 2px #f5a623")}
                onBlur={(e) => (e.target.style.boxShadow = "none")}
              />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <label style={{ fontSize: "12px", fontWeight: 700, color: "#1a2b6d", letterSpacing: "0.07em" }}>EMAIL</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                style={{ background: "#f5f5f5", border: "none", borderRadius: "6px", padding: "12px 14px", fontSize: "14px", color: "#333", outline: "none", fontFamily: "inherit" }}
                onFocus={(e) => (e.target.style.boxShadow = "0 0 0 2px #f5a623")}
                onBlur={(e) => (e.target.style.boxShadow = "none")}
              />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <label style={{ fontSize: "12px", fontWeight: 700, color: "#1a2b6d", letterSpacing: "0.07em" }}>TELEFONE</label>
              <input
                type="text"
                name="telefone"
                value={form.telefone}
                onChange={handleChange}
                style={{ background: "#f5f5f5", border: "none", borderRadius: "6px", padding: "12px 14px", fontSize: "14px", color: "#333", outline: "none", fontFamily: "inherit" }}
                onFocus={(e) => (e.target.style.boxShadow = "0 0 0 2px #f5a623")}
                onBlur={(e) => (e.target.style.boxShadow = "none")}
              />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <label style={{ fontSize: "12px", fontWeight: 700, color: "#1a2b6d", letterSpacing: "0.07em" }}>NÚMERO DA CNH</label>
              <input
                type="text"
                name="cnh"
                value={form.cnh}
                onChange={handleChange}
                style={{ background: "#f5f5f5", border: "none", borderRadius: "6px", padding: "12px 14px", fontSize: "14px", color: "#333", outline: "none", fontFamily: "inherit" }}
                onFocus={(e) => (e.target.style.boxShadow = "0 0 0 2px #f5a623")}
                onBlur={(e) => (e.target.style.boxShadow = "none")}
              />
            </div>

            <button
              type="submit"
              style={{
                background: "#f5a623",
                border: "none",
                borderRadius: "6px",
                color: "#fff",
                fontSize: "14px",
                fontWeight: 700,
                letterSpacing: "0.1em",
                padding: "14px",
                cursor: "pointer",
                marginTop: "4px",
                transition: "background 0.2s",
                fontFamily: "inherit",
              }}
              onMouseEnter={(e) => ((e.target as HTMLButtonElement).style.background = "#e09510")}
              onMouseLeave={(e) => ((e.target as HTMLButtonElement).style.background = "#f5a623")}
            >
              EDITAR
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}