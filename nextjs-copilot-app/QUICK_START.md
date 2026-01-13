# Quick Start Guide

Follow these steps to get started with GitHub Copilot customization in this Next.js project.

## Step 1: Verify Installation

1. **Check VS Code Version**: Ensure you have VS Code 1.106 or later
   - Open VS Code
   - Go to Help → About
   - Verify version number

2. **Check GitHub Copilot**: Ensure you have an active GitHub Copilot subscription
   - Open VS Code
   - Look for Copilot icon in the status bar
   - Should show "Copilot: Active"

3. **Install Dependencies**:
   ```bash
   cd nextjs-copilot-app
   npm install
   ```

4. **Test the Dev Server**:
   ```bash
   npm run dev
   ```
   - Open http://localhost:3000
   - Verify the app runs without errors

## Step 2: Configure MCP Servers

### Create GitHub Personal Access Token

1. Go to https://github.com/settings/tokens
2. Click "Generate new token (classic)"
3. Give it a descriptive name: "VS Code Copilot MCP"
4. Select scopes:
   - ✅ `repo` (Full control of private repositories)
5. Click "Generate token"
6. **Copy the token** (you won't see it again!)
7. Store it securely (password manager recommended)

### Create Figma Personal Access Token (Optional)

1. Open Figma
2. Click your profile icon → Settings
3. Go to "Account" tab
4. Scroll to "Personal access tokens"
5. Click "Generate new token"
6. Give it a name: "VS Code Copilot MCP"
7. **Copy the token**
8. Store it securely

### Enable Custom Instructions

1. Open VS Code Settings (`Cmd+,` on Mac, `Ctrl+,` on Windows)
2. Search for: `github.copilot.chat.codeGeneration.useInstructionFiles`
3. ✅ Enable the checkbox

## Step 3: Test the Configuration

### Test 1: Custom Instructions

1. Open VS Code Chat (`Cmd+Shift+I` or click the chat icon)
2. Type: "Create a simple Button component"
3. Verify the generated code:
   - Uses TypeScript
   - Uses Tailwind CSS
   - Follows project naming conventions
   - Is in PascalCase

### Test 2: Prompt Files

1. Open VS Code Chat
2. Type `/` (forward slash)
3. You should see a list including:
   - `/plan-from-issue`
   - `/ui-from-figma`
   - `/implement-issue`
4. If you don't see them:
   - Restart VS Code
   - Check files exist in `.github/prompts/`
   - Verify file names end with `.prompt.md`

### Test 3: Custom Agent

1. Open VS Code Chat
2. Click the agent selector (@ icon or type `@`)
3. Look for `@nextjs-generator` in the list
4. Select it
5. Type a simple request: "Hello, can you help me?"
6. The agent should respond with information about its role

### Test 4: MCP Servers

**First Time Only**: VS Code will prompt you for tokens

1. Open VS Code Chat
2. Type: `/plan-from-issue` (or any command that uses GitHub MCP)
3. VS Code will show a prompt: "GitHub Personal Access Token"
4. Paste your GitHub token
5. Click "Submit"
6. The token is now stored securely
7. Repeat for Figma token when prompted

**Test GitHub MCP**:
```
@nextjs-generator list my GitHub repositories
```

**Test Figma MCP** (if configured):
```
@nextjs-generator show me Figma files I have access to
```

## Step 4: Create Your First Feature

### Option A: From a GitHub Issue

1. **Create an Issue** in your GitHub repository:
   - Title: "Create a contact form"
   - Description:
     ```
     Create a contact form component with:
     - Name field (required)
     - Email field (required, validated)
     - Message textarea (required)
     - Submit button
     - Form validation
     - Success/error states
     ```

2. **Generate the Plan**:
   ```
   /plan-from-issue #1
   ```
   (Replace #1 with your actual issue number)

3. **Implement the Feature**:
   ```
   /implement-issue #1
   ```

4. **Review the Code**:
   - Check generated files
   - Verify TypeScript types
   - Test the component
   - Make any necessary adjustments

5. **Commit**:
   ```bash
   git add .
   git commit -m "feat: implement contact form (#1)"
   git push
   ```

### Option B: From a Figma Design

1. **Create a Figma Design** (or use an existing one):
   - Simple hero section
   - Header with title and subtitle
   - Call-to-action button
   - Background image

2. **Get the Figma URL**:
   - Open your Figma file
   - Right-click the frame
   - Copy link to frame

3. **Generate the Component**:
   ```
   /ui-from-figma <paste-figma-url>
   ```

4. **Review and Test**:
   - Check the generated component
   - Verify styling matches Figma
   - Test responsiveness
   - Adjust if needed

5. **Commit**:
   ```bash
   git add .
   git commit -m "feat: add hero component from Figma design"
   git push
   ```

## Step 5: Workflow Tips

### Daily Development Workflow

1. **Start with an Issue**: Create GitHub Issues for features/bugs
2. **Use the Agent**: Select `@nextjs-generator` for context-aware help
3. **Generate Plans**: Use `/plan-from-issue` before implementing
4. **Implement**: Use `/implement-issue` or code manually following the plan
5. **Review**: Always review generated code before committing
6. **Test**: Run `npm run dev` and test in browser
7. **Commit**: Reference the issue in your commit message

### Best Practices

✅ **Do**:
- Review all generated code
- Test TypeScript compilation: `npm run build`
- Run linter: `npm run lint`
- Test responsive design
- Check accessibility
- Keep issues detailed and clear
- Update README when adding major features

❌ **Don't**:
- Commit generated code without reviewing
- Hardcode API keys or secrets
- Skip testing
- Ignore TypeScript errors
- Commit MCP tokens to the repository

### Troubleshooting

**Problem**: Prompts not showing
- Solution: Restart VS Code, verify files in `.github/prompts/`

**Problem**: Custom agent not appearing
- Solution: Check `.github/agents/nextjs-generator.agent.md` exists, restart VS Code

**Problem**: MCP server fails
- Solution: Check token is valid, verify Node.js is installed

**Problem**: Instructions not applied
- Solution: Enable `github.copilot.chat.codeGeneration.useInstructionFiles` setting

## Step 6: Customize Further

### Add More Prompt Files

Create new `.prompt.md` files in `.github/prompts/`:

```markdown
---
name: your-command-name
description: What this prompt does
agent: agent
tools:
  - github/*
---

# Your Prompt Instructions

Detailed instructions here...
```

### Modify Custom Instructions

Edit `.github/copilot-instructions.md` to add:
- Project-specific conventions
- New tech stack choices
- Additional code quality rules
- Team-specific guidelines

### Create Additional Agents

Create new `.agent.md` files in `.github/agents/` for specialized tasks:
- Testing specialist
- Documentation writer
- Database expert
- API designer

## Next Steps

1. ✅ Complete the SETUP_CHECKLIST.md
2. 📝 Create 3+ GitHub Issues for your project
3. 🎨 Add Figma designs (optional)
4. 🚀 Use the prompts to generate code
5. 📚 Update README with your examples
6. 🎯 Submit your completed project

## Resources

- [VS Code Copilot Docs](https://code.visualstudio.com/docs/copilot/overview)
- [Custom Instructions](https://code.visualstudio.com/docs/copilot/customization/custom-instructions)
- [Prompt Files](https://code.visualstudio.com/docs/copilot/customization/prompt-files)
- [MCP Servers](https://code.visualstudio.com/docs/copilot/customization/mcp-servers)
- [Next.js Docs](https://nextjs.org/docs)

---

**Need Help?** Check the README.md troubleshooting section or create a GitHub Issue in your repository.
