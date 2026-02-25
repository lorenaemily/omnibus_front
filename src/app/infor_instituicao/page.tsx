"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const AVATARS = [
  "/avatars/avatar-1.png",
  "/avatars/avatar-2.png",
  "/avatars/avatar-3.png",
  "/avatars/avatar-4.png",
  "/avatars/avatar-5.png",
  "/avatars/avatar-6.png",
];

interface Institution {
  id: number;
  name: string;
  email: string;
  city_state: string;
  cnpj: string;
  created_at?: string;
  updated_at?: string;
}

export default function PerfilPage() {
  const router = useRouter();
  const [editando, setEditando] = useState(false);
  const [avatarSelecionado, setAvatarSelecionado] = useState(AVATARS[0]);
  const [avatarTemp, setAvatarTemp] = useState(AVATARS[0]);
  const [mostrarAvatars, setMostrarAvatars] = useState(false);

  const [form, setForm] = useState<Institution>({
    id: 1,
    name: "EEEP JEOVÁ COSTA LIMA",
    email: "epjoeova@gmail.com",
    city_state: "RUSSAS-CE",
    cnpj: "00.000.000/0001-91",
  });

  const [formEdit, setFormEdit] = useState<Institution>({ ...form });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormEdit({ ...formEdit, [e.target.name]: e.target.value });
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setForm({ ...formEdit, updated_at: new Date().toISOString() });
    setAvatarSelecionado(avatarTemp);
    setEditando(false);
    setMostrarAvatars(false);
  };

  const handleCancel = () => {
    setFormEdit({ ...form });
    setAvatarTemp(avatarSelecionado);
    setEditando(false);
    setMostrarAvatars(false);
  };

  return (
    <div className="page">
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

      <main className="main">
        <div className="card">
          <div className="card-inner">

            <div className="avatar-col">
              <div className="avatar-wrapper">
                <div className="avatar-circle">
                  <img
                    src={editando ? avatarTemp : avatarSelecionado}
                    alt="Avatar da instituição"
                    className="avatar-img"
                    onError={(e) => { (e.target as HTMLImageElement).src = ""; }}
                  />
                </div>
                {editando && (
                  <button
                    type="button"
                    className="btn-trocar-avatar"
                    onClick={() => setMostrarAvatars(!mostrarAvatars)}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                      <circle cx="12" cy="13" r="4" />
                    </svg>
                  </button>
                )}
              </div>

              {mostrarAvatars && editando && (
                <div className="avatar-grid">
                  <p className="avatar-grid-title">Escolha um avatar</p>
                  <div className="avatar-options">
                    {AVATARS.map((av, i) => (
                      <button
                        key={i}
                        type="button"
                        className={`avatar-option${avatarTemp === av ? " selected" : ""}`}
                        onClick={() => { setAvatarTemp(av); setMostrarAvatars(false); }}
                      >
                        <img src={av} alt={`Avatar ${i + 1}`} className="avatar-option-img" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {!editando && (
                <button
                  className="btn-editar"
                  onClick={() => { setEditando(true); setAvatarTemp(avatarSelecionado); }}
                >
                  EDITAR
                </button>
              )}
            </div>

            <div className="fields-col">
              {editando ? (
                <form onSubmit={handleSave}>
                  <div className="field">
                    <label className="label">INSTITUIÇÃO <span className="dot">•</span></label>
                    <input type="text" name="name" className="input" value={formEdit.name} onChange={handleChange} />
                  </div>
                  <div className="field">
                    <label className="label">EMAIL</label>
                    <input type="email" name="email" className="input" value={formEdit.email} onChange={handleChange} />
                  </div>
                  <div className="field">
                    <label className="label">CIDADE / UF</label>
                    <input type="text" name="city_state" className="input" value={formEdit.city_state} onChange={handleChange} />
                  </div>
                  <div className="field">
                    <label className="label">CNPJ</label>
                    <input type="text" name="cnpj" className="input" value={formEdit.cnpj} onChange={handleChange} />
                  </div>
                  <div className="btn-row">
                    <button type="button" className="btn-cancelar" onClick={handleCancel}>CANCELAR</button>
                    <button type="submit" className="btn-salvar">SALVAR</button>
                  </div>
                </form>
              ) : (
                <>
                  <div className="field">
                    <label className="label">INSTITUIÇÃO <span className="dot">•</span></label>
                    <div className="value-box">{form.name}</div>
                  </div>
                  <div className="field">
                    <label className="label">EMAIL</label>
                    <div className="value-box">{form.email}</div>
                  </div>
                  <div className="field">
                    <label className="label">CIDADE / UF</label>
                    <div className="value-box">{form.city_state}</div>
                  </div>
                  <div className="field">
                    <label className="label">CNPJ</label>
                    <div className="value-box">{form.cnpj}</div>
                  </div>
                </>
              )}
            </div>

          </div>
        </div>
      </main>

      <style jsx>{`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        .page {
          min-height: 100vh;
          background: #ffffff;
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        }

        .navbar {
          width: 100%;
          background: #ffffff;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 32px;
          height: 56px;
          border-bottom: 1px solid #e0e0e0;
          box-shadow: 0 1px 4px rgba(0,0,0,0.06);
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 28px;
        }

        .nav-link {
          font-size: 13px;
          font-weight: 500;
          color: #444;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        }

        .nav-link:hover {
          color: #1a1a1a;
        }

        .nav-right {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .icon-btn {
          background: none;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          transition: background 0.15s;
          padding: 0;
        }

        .icon-btn:hover {
          background: #f5f5f5;
        }

        .notif-icon-btn {
          background: none;
          width: 34px;
          height: 34px;
        }

        .notif-icon-btn:hover {
          background: #f5f5f5;
        }

        .user-icon-btn {
          background: #01233F;
          width: 34px;
          height: 34px;
        }

        .user-icon-btn:hover {
          background: #013560;
        }

        .main {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 40px 20px;
          min-height: calc(100vh - 56px);
        }

        .card {
          background: #ffffff;
          border-radius: 5px;
          padding: 48px 56px;
          width: 85%;
          max-width: 1000px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);
        }

        .card-inner {
          display: flex;
          gap: 64px;
          align-items: flex-start;
        }

        .avatar-col {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
          flex-shrink: 0;
          min-width: 210px;
        }

        .avatar-wrapper {
          position: relative;
          width: 200px;
          height: 200px;
        }

        .avatar-circle {
          width: 200px;
          height: 200px;
          border-radius: 50%;
          background: #e8edf2;
          border: 3px solid #d0d8e4;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .avatar-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 50%;
        }

        .btn-trocar-avatar {
          position: absolute;
          bottom: 8px;
          right: 8px;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: #01233F;
          border: 2px solid #fff;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.15s;
          padding: 0;
        }

        .btn-trocar-avatar:hover {
          background: #013560;
        }

        .avatar-grid {
          width: 200px;
          background: #fff;
          border: 1.5px solid #e0e0e0;
          border-radius: 5px;
          padding: 12px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.08);
        }

        .avatar-grid-title {
          font-size: 10px;
          font-weight: 800;
          color: #888;
          letter-spacing: 1px;
          text-transform: uppercase;
          margin-bottom: 10px;
          text-align: center;
        }

        .avatar-options {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 8px;
        }

        .avatar-option {
          width: 100%;
          aspect-ratio: 1;
          border-radius: 50%;
          border: 2.5px solid transparent;
          background: #F3F3F3;
          cursor: pointer;
          overflow: hidden;
          padding: 0;
          transition: border-color 0.15s;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .avatar-option.selected {
          border-color: #f1bb13;
        }

        .avatar-option:hover {
          border-color: #dba900;
        }

        .avatar-option-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 50%;
        }

        .btn-editar {
          background: #f1bb13;
          border: none;
          border-radius: 4px;
          height: 40px;
          width: 120px;
          font-size: 13px;
          font-weight: 900;
          letter-spacing: 1.5px;
          color: #ffffff;
          text-transform: uppercase;
          cursor: pointer;
          transition: background 0.15s;
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        }

        .btn-editar:hover {
          background: #dba900;
        }

        .fields-col {
          flex: 1;
        }

        .field {
          margin-bottom: 20px;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .label {
          font-size: 11px;
          font-weight: 800;
          color: #222;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .dot {
          color: #e53935;
          font-size: 14px;
        }

        .value-box {
          width: 100%;
          height: 42px;
          border: 1.5px solid #e0e0e0;
          border-radius: 4px;
          padding: 0 14px;
          font-size: 14px;
          font-weight: 600;
          color: #333;
          background: #F3F3F3;
          display: flex;
          align-items: center;
        }

        .input {
          width: 100%;
          height: 42px;
          border: 1.5px solid #e0e0e0;
          border-radius: 4px;
          padding: 0 14px;
          font-size: 14px;
          font-weight: 600;
          color: #333;
          background: #F3F3F3;
          outline: none;
          transition: border-color 0.2s;
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        }

        .input::placeholder {
          color: #ACACAC;
          font-weight: 600;
        }

        .input:focus {
          border-color: #f1bb13;
        }

        .btn-row {
          display: flex;
          gap: 12px;
          margin-top: 8px;
        }

        .btn-cancelar {
          flex: 1;
          height: 42px;
          background: #e0e0e0;
          border: none;
          border-radius: 4px;
          font-size: 13px;
          font-weight: 900;
          letter-spacing: 1.5px;
          color: #555;
          text-transform: uppercase;
          cursor: pointer;
          transition: background 0.15s;
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        }

        .btn-cancelar:hover {
          background: #cfcfcf;
        }

        .btn-salvar {
          flex: 1;
          height: 42px;
          background: #f1bb13;
          border: none;
          border-radius: 4px;
          font-size: 13px;
          font-weight: 900;
          letter-spacing: 1.5px;
          color: #ffffff;
          text-transform: uppercase;
          cursor: pointer;
          transition: background 0.15s;
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        }

        .btn-salvar:hover {
          background: #dba900;
        }

        @media (max-width: 768px) {
          .navbar {
            padding: 0 16px;
          }

          .nav-links {
            gap: 16px;
          }

          .card {
            width: 95%;
            padding: 28px 20px;
          }

          .card-inner {
            flex-direction: column;
            align-items: center;
            gap: 28px;
          }

          .avatar-col {
            width: 100%;
          }

          .btn-editar {
            width: 100%;
          }

          .avatar-grid {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}