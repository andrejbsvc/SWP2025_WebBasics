# GitHub Copilot Setup Checklist

Complete this checklist to ensure your GitHub Copilot configuration is working correctly.

## ✅ Project Setup

- [ ] Next.js project created and runs successfully (`npm run dev`)
- [ ] All dependencies installed (`npm install`)
- [ ] TypeScript compiles without errors (`npm run build`)
- [ ] ESLint runs without errors (`npm run lint`)

## ✅ Custom Instructions

- [ ] File `.github/copilot-instructions.md` exists
- [ ] Custom instructions include:
  - [ ] Tech stack decisions
  - [ ] Folder/file conventions
  - [ ] Code quality rules
  - [ ] Generation workflow
- [ ] Setting `github.copilot.chat.codeGeneration.useInstructionFiles` is enabled in VS Code
- [ ] Test: Ask Copilot to generate a component and verify it follows conventions

## ✅ Prompt Files

- [ ] Directory `.github/prompts/` exists
- [ ] Three prompt files created:
  - [ ] `plan-from-issue.prompt.md`
  - [ ] `ui-from-figma.prompt.md`
  - [ ] `implement-issue.prompt.md`
- [ ] Each prompt file has:
  - [ ] Valid YAML frontmatter
  - [ ] Clear description
  - [ ] Tools specified (if needed)
  - [ ] Clear instructions in body
- [ ] Test: Type `/` in VS Code Chat and verify prompts appear in the list

## ✅ Custom Agent

- [ ] Directory `.github/agents/` exists
- [ ] File `nextjs-generator.agent.md` exists
- [ ] Agent file includes:
  - [ ] YAML frontmatter with name and tools
  - [ ] Clear role description
  - [ ] Reference to custom instructions
  - [ ] List of available tools
- [ ] Test: Open VS Code Chat, click agent selector (@), verify `@nextjs-generator` appears
- [ ] Test: Use the agent with a sample prompt

## ✅ MCP Server Configuration

- [ ] File `.vscode/mcp.json` exists
- [ ] GitHub MCP server configured:
  - [ ] Server type: stdio
  - [ ] Command: npx
  - [ ] Args include GitHub server package
  - [ ] Environment variable for token configured
  - [ ] Input variable for token defined
- [ ] Figma MCP server configured:
  - [ ] Server type: stdio
  - [ ] Command: npx
  - [ ] Args include Figma server package
  - [ ] Environment variable for token configured
  - [ ] Input variable for token defined
- [ ] No secrets/tokens hardcoded in the file

## ✅ MCP Server Setup

- [ ] GitHub Personal Access Token created
  - [ ] Go to https://github.com/settings/tokens
  - [ ] Create token with `repo` scope
  - [ ] Token stored securely (not committed to repo)
- [ ] Figma Personal Access Token created (optional)
  - [ ] Go to Figma → Settings → Account → Personal access tokens
  - [ ] Create new token
  - [ ] Token stored securely (not committed to repo)
- [ ] Test: Use a prompt that requires MCP tools
- [ ] Test: VS Code prompts for tokens on first use
- [ ] Test: Tokens are saved and reused for subsequent requests

## ✅ Agent Tool Configuration

- [ ] Agent file includes `tools` metadata
- [ ] GitHub tools referenced: `github/*`
- [ ] Figma tools referenced: `figma/*`
- [ ] Test: Agent can use GitHub MCP tools
- [ ] Test: Agent can use Figma MCP tools

## ✅ Documentation

- [ ] README.md updated with:
  - [ ] Project overview
  - [ ] Setup instructions
  - [ ] Copilot configuration details
  - [ ] Usage examples for each prompt
  - [ ] Troubleshooting section
  - [ ] Example of implemented features
- [ ] `.env.example` file created with placeholder values
- [ ] No sensitive information committed to repository

## ✅ Testing & Verification

- [ ] Custom instructions are applied to chat requests
- [ ] Prompt files can be invoked with `/` command
- [ ] Custom agent appears in agent selector
- [ ] GitHub MCP server can read issues
- [ ] Figma MCP server can access designs (if configured)
- [ ] Generated code follows project conventions
- [ ] TypeScript types are generated correctly
- [ ] Tailwind CSS classes are used
- [ ] Components are accessible

## ✅ Evidence of Success

### Feature Implementation from GitHub Issues

- [ ] Created at least 1 GitHub Issue with detailed requirements
- [ ] Used `/plan-from-issue` or `/implement-issue` to generate code
- [ ] Generated code committed to repository
- [ ] Feature documented in README

**Issue Implemented**: #_____

**Files Created/Modified**:
- 

### UI Component from Figma

- [ ] Created or referenced a Figma design
- [ ] Used `/ui-from-figma` to generate component
- [ ] Generated component committed to repository
- [ ] Component documented in README

**Figma Frame Used**: _____________________

**Component Created**: _____________________

### Manual Fixes Applied

Document any fixes you needed to apply after code generation:

1. 
2. 
3. 

## 🎉 Completion

Once all items are checked:
- [ ] All checklist items completed
- [ ] Project runs without errors
- [ ] All features documented
- [ ] Ready for submission

---

**Date Completed**: _____________________

**Notes**:
