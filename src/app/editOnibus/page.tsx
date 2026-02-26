"use client";

import { useState } from "react";
import { Montserrat } from "next/font/google";
import { useRouter } from "next/navigation";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function EditarOnibus() {
  const router = useRouter();

  const [form, setForm] = useState({
    plate: "240409CP",       // vehicles.plate
    capacity: "68",          // vehicles.capacity
    mainRute: "Poço Redondo", // vehicles.mainRute
    drivers_id: "",          // vehicles.drivers_id
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
  };

  const inputStyle = {
    background: "#f5f5f5",
    border: "none",
    borderRadius: "6px",
    padding: "12px 14px",
    fontSize: "14px",
    color: "#333",
    outline: "none",
    fontFamily: "inherit",
    width: "100%",
    boxSizing: "border-box",
  } as React.CSSProperties;

  const labelStyle = {
    fontSize: "12px",
    fontWeight: 700,
    color: "#1a2b6d",
    letterSpacing: "0.07em",
  } as React.CSSProperties;

  return (
    <main
      className={montserrat.className}
      style={{ minHeight: "100vh", background: "#fff", display: "flex", flexDirection: "column" }}
    >
      <style>{`
        .navbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 32px;
          border-bottom: 1px solid #e5e5e5;
        }

        .nav-links {
          display: flex;
          gap: 32px;
        }

        .nav-link {
          font-size: 14px;
          font-weight: 700;
          color: #1a2b6d;
          letter-spacing: 0.05em;
          background: none;
          border: none;
          cursor: pointer;
          font-family: inherit;
          padding: 0;
        }

        .nav-link:hover {
          opacity: 0.7;
        }

        .nav-right {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .icon-btn {
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .user-icon-btn {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: #1a2b6d;
        }
      `}</style>

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="nav-links">
          <button onClick={() => router.push("/dashboard")} className="nav-link">DASHBOARD</button>
          <button onClick={() => router.push("/financeiro")} className="nav-link">FINANCEIRO</button>
        </div>
        <div className="nav-right">
          <button className="icon-btn notif-icon-btn" title="Notificações" onClick={() => router.push("/notificacoes")}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#01233F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
              <path d="M13.73 21a2 2 0 0 1-3.46 0" />
            </svg>
          </button>
          <button className="icon-btn user-icon-btn" title="Usuário" onClick={() => router.push("/perfil")}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </button>
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
          EDITAR ÔNIBUS
        </h1>

        <div
          style={{
            background: "#fff",
            border: "1px solid #ddd",
            borderRadius: "10px",
            padding: "32px 32px 36px",
            width: "100%",
            maxWidth: "480px",
            boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
          }}
        >
          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            {/* plate + capacity lado a lado */}
            <div style={{ display: "flex", gap: "16px" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "6px", flex: 1 }}>
                <label style={labelStyle}>PLACA DO VEÍCULO</label>
                <input
                  type="text"
                  name="plate"
                  value={form.plate}
                  onChange={handleChange}
                  style={inputStyle}
                  onFocus={(e) => (e.target.style.boxShadow = "0 0 0 2px #f5a623")}
                  onBlur={(e) => (e.target.style.boxShadow = "none")}
                />
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "6px", flex: 1 }}>
                <label style={labelStyle}>CAPACIDADE</label>
                <input
                  type="text"
                  name="capacity"
                  value={form.capacity}
                  onChange={handleChange}
                  style={inputStyle}
                  onFocus={(e) => (e.target.style.boxShadow = "0 0 0 2px #f5a623")}
                  onBlur={(e) => (e.target.style.boxShadow = "none")}
                />
              </div>
            </div>

            {/* mainRute */}
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <label style={labelStyle}>ROTA PRINCIPAL</label>
              <input
                type="text"
                name="mainRute"
                value={form.mainRute}
                onChange={handleChange}
                style={inputStyle}
                onFocus={(e) => (e.target.style.boxShadow = "0 0 0 2px #f5a623")}
                onBlur={(e) => (e.target.style.boxShadow = "none")}
              />
            </div>

            {/* drivers_id */}
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <label style={labelStyle}>ID DO MOTORISTA</label>
              <input
                type="text"
                name="drivers_id"
                value={form.drivers_id}
                onChange={handleChange}
                style={inputStyle}
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