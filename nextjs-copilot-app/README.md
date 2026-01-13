# Next.js Copilot App

A Next.js application configured with GitHub Copilot custom instructions, prompt files, custom agents, and MCP servers for automated code generation from GitHub Issues and Figma designs.

## Project Overview

This project demonstrates the full integration of GitHub Copilot customization features:
- **Custom Instructions**: Project-wide coding standards and workflows
- **Prompt Files**: Reusable commands for common tasks
- **Custom Agent**: Specialized "Next.js Generator" for issue-to-code workflows
- **MCP Servers**: GitHub and Figma integration for context-aware generation

## Tech Stack

- **Framework**: Next.js 15+ with App Router
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS v4
- **Package Manager**: npm
- **Linting**: ESLint with Next.js config
- **Build**: Turbopack

## Getting Started

### Prerequisites

- Node.js 18+ installed
- VS Code with GitHub Copilot
- GitHub Personal Access Token (with `repo` scope)
- Figma Personal Access Token (optional, for Figma integration)

### Installation

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd nextjs-copilot-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Copilot Configuration

### Custom Instructions

Located in `.github/copilot-instructions.md`, this file contains:
- Tech stack decisions
- Folder and file conventions
- Code quality rules
- Generation workflow (issue → plan → code → tests)

The instructions are automatically applied to all Copilot chat requests in this workspace.

### Prompt Files

Three prompt files are available in `.github/prompts/`:

#### 1. `/plan-from-issue`
Creates a detailed implementation plan from a GitHub Issue.

**Usage:**
```
/plan-from-issue #42
/plan-from-issue https://github.com/user/repo/issues/42
```

**Output:**
- Overview and technical approach
- Files to create/modify
- Component breakdown
- Implementation steps checklist

#### 2. `/ui-from-figma`
Generates production-ready React components from Figma designs.

**Usage:**
```
/ui-from-figma https://www.figma.com/file/.../Hero-Section
/ui-from-figma hero section design
```

**Output:**
- Complete TypeScript/TSX component
- Tailwind CSS styling matching Figma
- Responsive design
- Accessibility attributes

#### 3. `/implement-issue`
Implements a GitHub Issue end-to-end with code and tests.

**Usage:**
```
/implement-issue #42
/implement-issue https://github.com/user/repo/issues/42
```

**Output:**
- All necessary files (types, components, routes)
- Error handling and loading states
- Basic tests
- Documentation and usage instructions

### Custom Agent

The **Next.js Generator** agent (`nextjs-generator`) is defined in `.github/agents/nextjs-generator.agent.md`.

**To use the custom agent:**
1. Open the Chat view in VS Code
2. Click the agent selector (@ icon)
3. Select `@nextjs-generator`
4. Ask it to implement features or generate components

**Example interactions:**
```
@nextjs-generator implement issue #42
@nextjs-generator create a hero component from Figma
@nextjs-generator help me plan the authentication feature
```

### MCP Servers

MCP (Model Context Protocol) servers are configured in `.vscode/mcp.json`:

#### GitHub MCP Server
- Reads GitHub Issues, PRs, and repository content
- Provides context for issue-based code generation
- **Setup**: Requires GitHub Personal Access Token with `repo` scope

#### Figma MCP Server
- Accesses Figma design files
- Extracts design tokens (colors, spacing, typography)
- Reads component specifications
- **Setup**: Requires Figma Personal Access Token

**First-time setup:**
1. When you first use a prompt that requires MCP tools, VS Code will prompt you for:
   - GitHub Personal Access Token
   - Figma Personal Access Token
2. These tokens are securely stored and reused for future requests
3. Never commit tokens to the repository

**Creating tokens:**
- **GitHub**: Go to Settings → Developer settings → Personal access tokens → Generate new token (classic) → Select `repo` scope
- **Figma**: Go to Figma → Settings → Account → Personal access tokens → Generate new token

## Project Structure

```
nextjs-copilot-app/
├── .github/
│   ├── copilot-instructions.md    # Custom instructions for Copilot
│   ├── prompts/                    # Reusable prompt files
│   │   ├── plan-from-issue.prompt.md
│   │   ├── ui-from-figma.prompt.md
│   │   └── implement-issue.prompt.md
│   └── agents/                     # Custom agents
│       └── nextjs-generator.agent.md
├── .vscode/
│   └── mcp.json                    # MCP server configuration
├── app/                            # Next.js app directory
│   ├── components/                 # Shared components
│   ├── lib/                        # Utility functions
│   ├── types/                      # TypeScript types
│   ├── layout.tsx
│   └── page.tsx
├── public/                         # Static assets
├── package.json
└── README.md
```

## Usage Examples

### Example 1: Plan from GitHub Issue

**Scenario**: You have a GitHub Issue describing a new feature.

**Steps:**
1. Open VS Code Chat (`Cmd+Shift+I` on Mac)
2. Type `/plan-from-issue #123`
3. Review the generated implementation plan
4. Use the plan to guide development

**Example Issue**: [Issue #1] - User Authentication System

**Generated Plan includes:**
- Overview of authentication system
- Required components (LoginForm, SignupForm, AuthProvider)
- API routes needed
- Database schema
- Step-by-step implementation checklist

### Example 2: Generate Component from Figma

**Scenario**: Your designer created a hero section in Figma.

**Steps:**
1. Get the Figma URL for the hero section frame
2. Open VS Code Chat
3. Type `/ui-from-figma <figma-url>`
4. Review and integrate the generated component

**Figma Design**: Hero section with background image, heading, subtitle, and CTA button

**Generated Code:**
```typescript
// app/components/Hero.tsx
interface HeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  backgroundImage: string;
}

export default function Hero({ title, subtitle, ctaText, ctaLink, backgroundImage }: HeroProps) {
  // Complete implementation with Tailwind CSS
}
```

### Example 3: Implement Feature End-to-End

**Scenario**: Implement a complete feature from a GitHub Issue.

**Steps:**
1. Create a GitHub Issue with detailed requirements
2. Open VS Code Chat
3. Select the custom agent: `@nextjs-generator`
4. Type `/implement-issue #42`
5. Review the generated code
6. Test the implementation
7. Commit with the suggested commit message

**Example Issue**: [Issue #2] - Product Listing Page

**Generated Files:**
```
app/types/product.ts            # Type definitions
app/lib/api/products.ts         # API client
app/components/ProductCard.tsx  # Product card component
app/products/page.tsx           # Products page
app/api/products/route.ts       # API route
```

## Demonstrated Features

### Implemented from GitHub Issues

1. **[Issue #1] - User Authentication System** *(Example)*
   - Login/Signup forms
   - Auth provider with context
   - Protected routes
   - Session management

2. **[Issue #2] - Product Listing Page** *(Example)*
   - Product grid layout
   - Filtering and search
   - Pagination
   - Responsive design

3. **[Issue #3] - Contact Form** *(Example)*
   - Form validation
   - Server action for submission
   - Success/error states
   - Email integration

### UI Components from Figma

1. **Hero Section**
   - Figma Frame: "Homepage / Hero"
   - Generated component: `app/components/Hero.tsx`
   - Features: Full-width background, centered content, responsive

2. **Navigation Bar** *(If applicable)*
   - Figma Frame: "Components / Navbar"
   - Generated component: `app/components/Navbar.tsx`
   - Features: Mobile menu, sticky header, active states

### Manual Fixes Applied

- **TypeScript Strict Mode**: Added explicit return types to some generated functions
- **Image Optimization**: Replaced `img` tags with Next.js `Image` component where needed
- **Environment Variables**: Moved hardcoded API URLs to `.env.local`
- **Accessibility**: Added missing ARIA labels to interactive elements

## Development Workflow

### Using the Custom Agent

1. **Select the Agent**: In VS Code Chat, select `@nextjs-generator`
2. **Provide Context**: Reference GitHub Issues or Figma designs
3. **Review Output**: Check generated code for quality and correctness
4. **Test**: Run the dev server and test functionality
5. **Iterate**: Ask for modifications if needed
6. **Commit**: Use the suggested commit message

### Best Practices

- Always review generated code before committing
- Test responsiveness across different screen sizes
- Verify accessibility with keyboard navigation
- Check TypeScript compilation and ESLint
- Update `.env.example` when adding new environment variables

## Troubleshooting

### MCP Server Issues

**Problem**: MCP server fails to start
**Solution**: 
- Check that Node.js is installed and accessible
- Verify tokens are correctly entered
- Check the MCP server output logs in VS Code

**Problem**: GitHub/Figma tools not available
**Solution**:
- Ensure MCP servers are configured in `.vscode/mcp.json`
- Restart VS Code
- Re-enter tokens if prompted

### Copilot Custom Instructions Not Applied

**Problem**: Generated code doesn't follow conventions
**Solution**:
- Verify `.github/copilot-instructions.md` exists
- Check file is valid Markdown
- Restart VS Code
- Enable the setting: `github.copilot.chat.codeGeneration.useInstructionFiles`

### Prompt Files Not Showing

**Problem**: Can't find prompt commands
**Solution**:
- Verify files are in `.github/prompts/` with `.prompt.md` extension
- Check YAML frontmatter is valid
- Restart VS Code
- Type `/` in chat to see available prompts

## Contributing

When adding new features:
1. Create a GitHub Issue describing the feature
2. Use `/plan-from-issue` to create an implementation plan
3. Use `/implement-issue` or implement manually following the plan
4. Add tests for new functionality
5. Update this README if adding major features
6. Submit a PR referencing the issue

## Learn More

To learn more about Next.js and GitHub Copilot customization:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API
- [VS Code Copilot Documentation](https://code.visualstudio.com/docs/copilot/overview)
- [Custom Instructions Guide](https://code.visualstudio.com/docs/copilot/customization/custom-instructions)
- [Prompt Files Guide](https://code.visualstudio.com/docs/copilot/customization/prompt-files)
- [MCP Servers Guide](https://code.visualstudio.com/docs/copilot/customization/mcp-servers)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## License

MIT

---

**Note**: This project is a demonstration of GitHub Copilot customization features. The example issues and Figma designs referenced are for illustration purposes. Replace them with your actual project requirements.
