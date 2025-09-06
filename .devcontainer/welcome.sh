#!/bin/bash

# --- Seção de Verificação de Atualizações ---
echo "---------------------------------------------------------"
echo "Verificando atualizações de pacotes pendentes..."
echo ""

updates=$(npm outdated)

if [ -z "$updates" ]; then
  echo "✅ Todos os pacotes estão atualizados."
else
  echo "⚠️ Atualizações de dependências disponíveis!"
  echo ""
  echo "$updates"
  echo ""
  echo "👉 Para atualizar, revise as mudanças e rode: npm update"
fi
echo "---------------------------------------------------------"


# --- Seção de Boas-Vindas ---
echo ""
echo "========================================================="
echo "  Boilerplate React + Emotion Carregado com Sucesso! "
echo "========================================================="
echo ""
echo "Ambiente configurado com Node.js LTS."
echo "Dependências instaladas via 'npm install'."
echo "-> Para iniciar o servidor, execute: npm run dev"
echo ""

