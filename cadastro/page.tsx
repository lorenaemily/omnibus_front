"use client";

import { useState } from "react";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import Link from "next/link";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function OmnibusCadastro() {
  const [form, setForm] = useState({
    instituicao: "",
    email: "",
    senha: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <main
      className={montserrat.className}
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        overflow: "hidden",
      }}
    >
      {/* LEFT PANEL - imagem menor */}
      <div
        style={{
          width: "35%",
          position: "relative",
        }}
      >
        <Image
          src="/banneromnibus.png"
          alt="Omnibus"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>

      {/* RIGHT PANEL */}
      <div
        style={{
          width: "65%",
          background: "#f2f2f2",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "64px 100px",
          gap: "0px",
        }}
      >
        {/* Title */}
        <div
          style={{
            width: "100%",
            maxWidth: "500px",
            marginBottom: "36px",
          }}
        >
          <h1
            style={{
              fontSize: "42px",
              fontWeight: 800,
              color: "#1a2b6d",
              margin: "0 0 10px 0",
              letterSpacing: "0.08em",
              textAlign: "center",
            }}
          >
            CADASTRO
          </h1>
          <div
            style={{
              height: "4px",
              background: "#f5a623",
              borderRadius: "2px",
              width: "100%",
            }}
          />
        </div>

        {/* Form card */}
        <form
          onSubmit={handleSubmit}
          style={{
            background: "#fff",
            borderRadius: "10px",
            padding: "48px 48px 52px",
            width: "100%",
            maxWidth: "500px",
            boxShadow: "0 2px 16px rgba(0,0,0,0.08)",
            display: "flex",
            flexDirection: "column",
            gap: "28px",
          }}
        >
          {[
            { label: "INSTITUIÇÃO", name: "instituicao", type: "text" },
            { label: "E-MAIL", name: "email", type: "email" },
            { label: "SENHA", name: "senha", type: "password" },
          ].map(({ label, name, type }) => (
            <div
              key={name}
              style={{ display: "flex", flexDirection: "column", gap: "8px" }}
            >
              <label
                style={{
                  fontSize: "13px",
                  fontWeight: 700,
                  color: "#1a2b6d",
                  letterSpacing: "0.08em",
                }}
              >
                {label}
              </label>
              <input
                type={type}
                name={name}
                value={form[name as keyof typeof form]}
                onChange={handleChange}
                style={{
                  border: "1.5px solid #ccc",
                  borderRadius: "8px",
                  padding: "14px 16px",
                  fontSize: "15px",
                  outline: "none",
                  transition: "border-color 0.2s",
                  color: "#333",
                  fontFamily: "inherit",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#f5a623")}
                onBlur={(e) => (e.target.style.borderColor = "#ccc")}
              />
            </div>
          ))}

          <button
            type="submit"
            style={{
              background: "#f5a623",
              border: "none",
              borderRadius: "8px",
              color: "#fff",
              fontSize: "15px",
              fontWeight: 700,
              letterSpacing: "0.12em",
              padding: "18px",
              cursor: "pointer",
              marginTop: "8px",
              transition: "background 0.2s",
              fontFamily: "inherit",
            }}
            onMouseEnter={(e) =>
              ((e.target as HTMLButtonElement).style.background = "#e09510")
            }
            onMouseLeave={(e) =>
              ((e.target as HTMLButtonElement).style.background = "#f5a623")
            }
          >
            CADASTRE-SE
          </button>
        </form>

        {/* Link login */}
        <p
          style={{
            marginTop: "20px",
            fontSize: "14px",
            color: "#555",
          }}
        >
          Já tem uma conta?{" "}
          <Link
            href="/login"
            style={{
              color: "#1a2b6d",
              fontWeight: 700,
              textDecoration: "none",
              borderBottom: "2px solid #f5a623",
              paddingBottom: "1px",
            }}
          >
            Faça login
          </Link>
        </p>
      </div>
    </main>
  );
}