# Architecture Decision Records (ADR)

Este documento registra decisões arquiteturais importantes do sistema SaaS de lembretes via WhatsApp. Cada decisão inclui contexto, alternativas consideradas e justificativa.

---

## ADR-001 – Linguagem e Framework Principal

**Status:** Aceito  
**Data:** 2026-03-31

### Contexto
O sistema foi inicialmente iniciado em Node.js com Express, porém existe a necessidade de maior robustez, tipagem forte e familiaridade com o ecossistema Java.

### Decisão
Adotar Java com Spring Boot como framework principal para a API central do sistema.

### Alternativas consideradas
- Manter Node.js com Express
- Migrar para NestJS
- Migrar para Java com Spring Boot

### Consequências
- Melhor suporte a arquitetura em camadas
- Forte tipagem e maior segurança em refatorações
- Maior consumo de memória em comparação ao Node.js

---

## ADR-002 – Gateway de Mensageria em Node.js

**Status:** Aceito  
**Data:** 2026-03-31

### Contexto
A biblioteca whatsapp-web.js é baseada em Node.js e não possui equivalente direto em Java.

### Decisão
Manter um serviço isolado em Node.js responsável exclusivamente pela comunicação com o WhatsApp Web.

### Consequências
- Arquitetura baseada em microserviços
- Comunicação via REST entre Spring e Node
- Facilidade de futura substituição pela API oficial da Meta

---

## ADR-003 – Arquitetura Multi-tenant

**Status:** Aceito  
**Data:** 2026-03-31

### Contexto
O sistema será oferecido como SaaS para múltiplas clínicas e profissionais.

### Decisão
Implementar isolamento lógico por empresa utilizando um identificador de tenant em todas as entidades do banco de dados.

### Consequências
- Simplificação da infraestrutura
- Necessidade de validação de tenant em todas as queries

---

## ADR-004 – Uso de Filas para Envio de Mensagens

**Status:** Aceito  
**Data:** 2026-03-31

### Contexto
O envio de mensagens via WhatsApp pode sofrer atrasos ou falhas e não deve bloquear requisições HTTP.

### Decisão
Utilizar Redis como fila de processamento assíncrono para envio de mensagens agendadas.

### Consequências
- Maior resiliência do sistema
- Complexidade adicional na infraestrutura

---

## ADR-005 – Estratégia de Migração Gradual Node → Spring

**Status:** Aceito  
**Data:** 2026-03-31

### Contexto
Parte do sistema já está implementada em Node.js e não pode ser descartada imediatamente.

### Decisão
Adotar uma estratégia de migração incremental, mantendo o sistema Node em produção enquanto novos módulos são desenvolvidos em Spring Boot.

### Consequências
- Necessidade de manter dois ambientes de runtime temporariamente
- Redução de risco durante a transição tecnológica

---

## Como adicionar novos ADRs

Para cada nova decisão:

1. Copiar o template abaixo
2. Incrementar o número sequencial

```
## ADR-00X – Título da decisão

**Status:** Proposto | Aceito | Rejeitado  
**Data:** YYYY-MM-DD

### Contexto
...

### Decisão
...

### Alternativas consideradas
...

### Consequências
...
```

