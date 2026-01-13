# GitHub Copilot Custom Instructions

## Tech Stack

- **Framework**: Next.js 15+ with App Router
- **Language**: TypeScript (strict mode enabled)
- **Styling**: Tailwind CSS v4
- **Package Manager**: npm
- **Code Quality**: ESLint with Next.js config
- **Build Tool**: Turbopack

## Folder and File Conventions

### Directory Structure
```
app/
├── (routes)/           # Route groups for organization
├── api/               # API routes
├── components/        # Shared components
├── lib/              # Utility functions and helpers
├── types/            # TypeScript type definitions
└── layout.tsx        # Root layout
```

### Naming Conventions
- **Components**: PascalCase (e.g., `UserProfile.tsx`)
- **Files**: kebab-case for non-components (e.g., `api-client.ts`)
- **Folders**: kebab-case (e.g., `user-profile/`)
- **Types**: PascalCase with descriptive names (e.g., `UserProfileData`)
- **Utilities**: camelCase (e.g., `formatDate.ts`)

### Component Structure
- Place reusable components in `app/components/`
- Use Server Components by default
- Add `"use client"` directive only when needed (interactivity, hooks, browser APIs)
- Co-locate component-specific styles and types

## Code Quality Rules

### TypeScript
- Use strict mode
- Define explicit return types for functions
- Use `interface` for object shapes, `type` for unions/intersections
- Avoid `any` - use `unknown` when type is uncertain
- Use type inference where obvious

### Component Best Practices
- Prefer Server Components for data fetching
- Use async/await in Server Components
- Keep Client Components small and focused
- Use React Server Actions for mutations
- Implement proper loading and error states

### Styling
- Use Tailwind utility classes
- Follow mobile-first responsive design
- Group related utilities (layout, spacing, colors)
- Extract repeated patterns into components
- Use `cn()` utility for conditional classes

### Accessibility
- Include ARIA labels for interactive elements
- Ensure keyboard navigation works
- Maintain proper heading hierarchy
- Provide alt text for images
- Use semantic HTML elements

### Performance
- Use Next.js Image component for images
- Implement code splitting via dynamic imports
- Optimize fonts with next/font
- Use React Suspense for loading states

## Generation Workflow

When generating code from GitHub Issues or Figma designs:

1. **Analysis Phase**
   - Read the full GitHub Issue or Figma design specification
   - Identify required components, routes, and data structures
   - Determine if Server or Client Component is needed
   - Check for dependencies on existing code

2. **Planning Phase**
   - Create a clear implementation plan
   - List all files to be created/modified
   - Identify reusable components
   - Plan data flow and state management

3. **Implementation Phase**
   - Generate TypeScript types first
   - Create components from smallest to largest
   - Follow the folder structure conventions
   - Add proper error handling and loading states
   - Include accessibility attributes

4. **Testing Checklist**
   - Component renders without errors
   - TypeScript compiles without warnings
   - ESLint passes with no errors
   - Responsive design works across breakpoints
   - Accessibility requirements met
   - Basic interaction testing completed

5. **Documentation**
   - Add JSDoc comments for complex functions
   - Include usage examples in comments
   - Document props with TypeScript interfaces
   - Add README sections if creating new features

## Code Generation Rules

- Generate complete, production-ready code
- Include proper error handling
- Add loading states for async operations
- Use environment variables for configuration
- Never hardcode sensitive data
- Follow DRY principles
- Write self-documenting code with clear naming
- Add comments only when logic is complex

## Integration with MCP Tools

When using GitHub MCP tools:
- Fetch full issue details including labels and comments
- Check for linked issues or PRs
- Reference issue number in commits

When using Figma MCP tools:
- Extract design tokens (colors, spacing, typography)
- Identify component hierarchy
- Note responsive breakpoints
- Capture design states (hover, active, disabled)
