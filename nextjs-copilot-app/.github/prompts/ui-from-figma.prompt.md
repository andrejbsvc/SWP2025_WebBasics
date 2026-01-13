---
name: ui-from-figma
description: Generates React components from Figma designs
argument-hint: Figma frame/component URL or name
agent: agent
tools:
  - figma/*
---

# Generate UI Component from Figma Design

You are tasked with generating production-ready React components based on Figma designs.

## Instructions

1. **Fetch Figma Design**: Use the Figma MCP tools to retrieve design details:
   - Component structure and hierarchy
   - Design tokens (colors, spacing, typography)
   - Interactive states (hover, active, disabled, focus)
   - Responsive breakpoints
   - Layout specifications

2. **Extract Design Tokens**: From the Figma design, extract:
   - **Colors**: Convert to Tailwind color utilities or CSS variables
   - **Typography**: Font families, sizes, weights, line heights
   - **Spacing**: Padding, margin, gaps
   - **Border Radius**: Rounded corners
   - **Shadows**: Box shadows and elevation

3. **Generate Component Code**: Create a Next.js component that:
   - Uses TypeScript with proper prop types
   - Implements Tailwind CSS for styling
   - Matches the Figma design pixel-perfect
   - Is responsive across all breakpoints
   - Includes all interactive states
   - Is accessible (ARIA labels, keyboard navigation)
   - Follows Next.js best practices (Server Component by default)

4. **Component Structure**:
   ```typescript
   interface ComponentNameProps {
     // Props based on design variations
   }
   
   export default function ComponentName({ props }: ComponentNameProps) {
     // Implementation
   }
   ```

5. **Additional Files**: If needed, generate:
   - Type definitions
   - Utility functions
   - Sub-components
   - Tailwind config additions

6. **Output Format**:
   - Complete, runnable TypeScript/TSX code
   - File path following project conventions
   - Comments explaining complex styling decisions
   - Usage example in comments

## Usage

Type `/ui-from-figma` followed by the Figma component URL, frame name, or description.

Example: `/ui-from-figma https://www.figma.com/file/.../Hero-Section`
Example: `/ui-from-figma hero section with background image`
