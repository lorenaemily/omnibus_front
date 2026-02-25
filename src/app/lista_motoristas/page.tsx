"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

// ─── Types — baseado na tabela drivers do banco ───────────────────────────────
interface Driver {
  id: number;
  user_id: number;
  name: string;
  phone: string;
  cnh: string;
  email: string;
  created_at: string;
  updated_at: string;
}

// ─── Mock data (substitua pela chamada à sua API) ─────────────────────────────
const mockDrivers: Driver[] = [
  { id: 1, user_id: 1, name: "José Bonifácio Pereira", phone: "55+ 88 94002-8922", cnh: "0123456789", email: "josebonifacio1@gmail.com", created_at: "", updated_at: "" },
  { id: 2, user_id: 2, name: "Maria Aparecida Santos",  phone: "55+ 88 94002-1234", cnh: "9876543210", email: "mariaaparecida@gmail.com",  created_at: "", updated_at: "" },
  { id: 3, user_id: 3, name: "Carlos Eduardo Lima",     phone: "55+ 88 94002-5678", cnh: "1122334455", email: "carloseduardo@gmail.com",    created_at: "", updated_at: "" },
  { id: 4, user_id: 4, name: "Ana Paula Ferreira",      phone: "55+ 88 94002-9900", cnh: "6677889900", email: "anapaula@gmail.com",         created_at: "", updated_at: "" },
  { id: 5, user_id: 5, name: "Roberto Alves Costa",     phone: "55+ 88 94002-3344", cnh: "2233445566", email: "robertoalves@gmail.com",     created_at: "", updated_at: "" },
];

// ─── Icons ────────────────────────────────────────────────────────────────────
function BellIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" />
    </svg>
  );
}

// ─── Driver Card ──────────────────────────────────────────────────────────────
function DriverCard({
  driver,
  onEdit,
  onDelete,
}: {
  driver: Driver;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}) {
  return (
    <div
      className="flex items-center bg-white border border-gray-200 shadow-sm overflow-hidden"
      style={{ borderRadius: 5 }}
    >
      {/* Barra lateral amarela */}
      <div className="self-stretch flex-shrink-0" style={{ width: 8, backgroundColor: "#F1BB13" }} />

      {/* Info principal */}
      <div className="flex-1 px-5 py-4 min-w-0">
        <p className="font-bold text-base" style={{ color: "#1C274C" }}>{driver.name}</p>
        <p className="text-sm mt-1">
          <span className="font-bold text-xs uppercase tracking-wide" style={{ color: "#F1BB13" }}>CNH: </span>
          <span className="text-gray-600">{driver.cnh}</span>
        </p>
      </div>

      {/* Divisor */}
      <div className="flex-shrink-0 bg-gray-200" style={{ width: 1, height: 48 }} />

      {/* Contato */}
      <div className="flex-1 px-6 py-4 min-w-0">
        <p className="text-sm">
          <span className="font-bold text-xs uppercase tracking-wide" style={{ color: "#F1BB13" }}>Email: </span>
          <span className="underline" style={{ color: "#1C274C" }}>{driver.email}</span>
        </p>
        <p className="text-sm mt-1">
          <span className="font-bold text-xs uppercase tracking-wide" style={{ color: "#F1BB13" }}>Telefone: </span>
          <span className="text-gray-600">{driver.phone}</span>
        </p>
      </div>

      {/* Divisor */}
      <div className="flex-shrink-0 bg-gray-200" style={{ width: 1, height: 48 }} />

      {/* Ações */}
      <div className="flex items-center gap-6 px-6 flex-shrink-0">
        <button
          onClick={() => onDelete(driver.id)}
          className="font-bold text-xs uppercase tracking-widest transition-opacity hover:opacity-70"
          style={{ color: "#ef4444" }}
        >
          Excluir
        </button>
        <button
          onClick={() => onEdit(driver.id)}
          className="font-bold text-xs uppercase tracking-widest transition-opacity hover:opacity-70"
          style={{ color: "#1C274C" }}
        >
          Editar
        </button>
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function MotoristasPage() {
  const router = useRouter();
  const [drivers, setDrivers] = useState<Driver[]>(mockDrivers);
  const [search, setSearch] = useState("");

  const filtered = drivers.filter(
    (d) =>
      d.name.toLowerCase().includes(search.toLowerCase()) ||
      d.email.toLowerCase().includes(search.toLowerCase()) ||
      d.cnh.includes(search)
  );

  // TODO: substitua pela chamada DELETE da sua API
  const handleDelete = (id: number) => {
    setDrivers((prev) => prev.filter((d) => d.id !== id));
  };

  // TODO: substitua pelo caminho real de edição
  const handleEdit = (id: number) => {
    router.push(`/motoristas/${id}/editar`);
  };

  const navigate = (path: string) => { router.push(path); };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">

      {/* ── Navbar ──────────────────────────────────────────────────────────── */}
      <header className="bg-white border-b border-gray-200 px-8 flex items-center justify-between h-14">
        <nav className="flex items-center gap-6">
          {/* TODO: ajuste os caminhos abaixo para as rotas reais */}
          <button
            onClick={() => navigate("/dashboard")}
            className="text-sm font-bold uppercase tracking-widest py-4 border-b-2 border-transparent text-gray-400 hover:text-gray-600 transition-colors"
          >
            Dashboard
          </button>
          <button
            onClick={() => navigate("/financeiro")}
            className="text-sm font-bold uppercase tracking-widest py-4 border-b-2 border-transparent text-gray-400 hover:text-gray-600 transition-colors"
          >
            Financeiro
          </button>
        </nav>

        <div className="flex items-center gap-4" style={{ color: "#1C274C" }}>
          {/* TODO: ajuste os caminhos abaixo */}
          <button onClick={() => navigate("/infor_instituicao")} className="relative hover:opacity-70 transition-opacity">
            <BellIcon />
            <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full" style={{ backgroundColor: "#F1BB13" }} />
          </button>
          <button
            onClick={() => navigate("/infor_instituicao")}
            className="w-9 h-9 rounded-full border-2 flex items-center justify-center hover:opacity-80 transition-opacity"
            style={{ borderColor: "#1C274C", backgroundColor: "#1C274C",color: "#ffffff" }}
          >
            <UserIcon />
          </button>
        </div>
      </header>

      {/* ── Main ────────────────────────────────────────────────────────────── */}
      <main className="max-w-5xl mx-auto px-6 py-8">

        {/* Toolbar */}
        <div className="flex items-center gap-4 mb-6">
          <h1 className="text-sm font-black uppercase tracking-widest whitespace-nowrap" style={{ color: "#1C274C" }}>
            Motoristas Cadastrados
          </h1>

          {/* Busca */}
          <div className="flex-1 relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
              <SearchIcon />
            </span>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Procurar motorista..."
              className="w-full pl-9 pr-4 py-2 border border-gray-200 text-sm text-gray-600 bg-white focus:outline-none focus:ring-2 transition"
              style={{ borderRadius: 5, focusRingColor: "#F1BB13" } as React.CSSProperties}
            />
          </div>

          {/* Botão Cadastrar — vai para /cadastro_motoristas */}
          <button
            onClick={() => navigate("/cadastro_motorista")}
            className="font-black uppercase tracking-widest text-xs shadow-md whitespace-nowrap active:scale-95 transition-all"
            style={{
              backgroundColor: "#F1BB13",
              color: "#ffffff",
              borderRadius: 5,
              paddingLeft: 24,
              paddingRight: 24,
              height: 40,
            }}
          >
            Cadastrar Motorista
          </button>
        </div>

        {/* Lista */}
        <div className="space-y-3">
          {filtered.length === 0 ? (
            <div className="text-center py-16 text-gray-400 text-sm">
              Nenhum motorista encontrado.
            </div>
          ) : (
            filtered.map((driver) => (
              <DriverCard
                key={driver.id}
                driver={driver}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            ))
          )}
        </div>
      </main>
    </div>
  );
}