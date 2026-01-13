---
name: implement-issue
description: Implements a GitHub Issue end-to-end with code and tests
argument-hint: Issue number or URL
agent: agent
tools:
  - github/*
  - figma/*
---

# Implement GitHub Issue End-to-End

You are tasked with implementing a complete feature or fix from a GitHub Issue, including code and basic tests.

## Instructions

1. **Gather Context**: 
   - Use GitHub MCP tools to fetch the full issue details
   - Check for linked Figma designs (if mentioned in issue)
   - Review existing codebase for similar patterns
   - Identify all affected files

2. **Create Implementation Plan**:
   - List all files to create/modify
   - Identify component hierarchy
   - Plan data flow and state management
   - Determine Server vs Client components

3. **Implementation**:
   
   **Step 1 - Types & Interfaces**:
   - Create TypeScript types in `app/types/`
   - Define component prop interfaces
   - Add API response types if needed
   
   **Step 2 - Utility Functions**:
   - Create helper functions in `app/lib/`
   - Add data transformation utilities
   - Implement validation functions
   
   **Step 3 - Components**:
   - Generate components following the folder structure
   - Start with leaf components (smallest, most reusable)
   - Build up to page-level components
   - Use Server Components by default
   - Add "use client" only when necessary
   
   **Step 4 - API Routes** (if needed):
   - Create route handlers in `app/api/`
   - Implement proper error handling
   - Add request validation
   - Use Next.js Server Actions where appropriate
   
   **Step 5 - Styling**:
   - Use Tailwind utility classes
   - Ensure responsive design
   - Match Figma designs if provided
   - Add hover/focus states
   
   **Step 6 - Accessibility**:
   - Add ARIA labels
   - Ensure keyboard navigation
   - Use semantic HTML
   - Test with screen reader in mind

4. **Testing**:
   - Add basic component tests
   - Test edge cases
   - Verify TypeScript compilation
   - Check ESLint passes
   - Test responsive behavior
   - Verify accessibility

5. **Documentation**:
   - Add JSDoc comments for complex functions
   - Update README if adding major features
   - Include usage examples in code comments
   - Document environment variables if added

## Output Format

1. **Summary**: Brief description of what was implemented
2. **Files Modified/Created**: Complete list with file paths
3. **Code**: All implementation code with proper formatting
4. **Testing Notes**: What was tested and results
5. **Usage Instructions**: How to use the new feature
6. **Commit Message**: Suggested git commit message referencing the issue

## Code Quality Checklist

Before completing implementation, verify:
- [ ] TypeScript compiles without errors
- [ ] ESLint passes with no warnings
- [ ] All components have proper prop types
- [ ] Error handling is implemented
- [ ] Loading states are included
- [ ] Responsive design works
- [ ] Accessibility requirements met
- [ ] Code follows project conventions
- [ ] Comments added where needed
- [ ] No hardcoded values or secrets

## Usage

Type `/implement-issue` followed by the issue number or URL.

Example: `/implement-issue #42`
Example: `/implement-issue https://github.com/user/repo/issues/42`
