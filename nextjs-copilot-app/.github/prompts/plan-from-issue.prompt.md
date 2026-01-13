---
name: plan-from-issue
description: Creates an implementation plan from a GitHub Issue
agent: agent
tools:
  - github/*
---

# Create Implementation Plan from GitHub Issue

You are tasked with creating a detailed implementation plan for a GitHub Issue.

## Instructions

1. **Fetch the Issue**: Use the GitHub MCP tools to retrieve the full details of the specified issue, including:
   - Title and description
   - Labels
   - Comments
   - Linked issues or PRs
   - Acceptance criteria (if specified)

2. **Analyze Requirements**: Based on the issue details, identify:
   - What feature or fix is being requested
   - Technical requirements
   - UI/UX requirements
   - Data models needed
   - API endpoints required
   - Dependencies on existing code

3. **Create Implementation Plan**: Generate a structured plan with:
   - **Overview**: Brief summary of what will be implemented
   - **Technical Approach**: Architecture decisions and patterns to use
   - **Files to Create/Modify**: Complete list with file paths
   - **Components Breakdown**: List of components with their responsibilities
   - **Data Flow**: How data moves through the application
   - **Testing Strategy**: What needs to be tested
   - **Implementation Steps**: Ordered checklist of tasks
   - **Potential Challenges**: Any foreseeable issues or blockers

4. **Output Format**: 
   - Use Markdown formatting
   - Include checkboxes for implementation steps
   - Add code examples where helpful
   - Reference the issue number throughout

## Usage

Type `/plan-from-issue` followed by the issue number or URL.

Example: `/plan-from-issue #42`
