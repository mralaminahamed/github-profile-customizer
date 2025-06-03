// src/contentScripts/constants.ts
export const SELECTORS = {
  activity: {
    container: '.js-yearly-contributions', // Main container for the contributions calendar and activity overview
    graph: '.js-calendar-graph-svg', // The SVG element for the contribution graph
    activityOverview: '.js-activity-overview', // Section showing activity overview (e.g., "Pro, Highlights, etc.")
  },
  repositories: {
    pinnedRepos: '.js-pinned-items-reorder-container', // Container for pinned repositories
    popularRepos: '.js-profile-repositories-section', // Section listing popular repositories
  },
  organizations: {
    container: '.border-top.color-border-muted.pt-3.mt-3.clearfix.hide-sm.hide-md', // Main container for organizations list
    items: '.avatar-group-item', // Individual organization avatar items
  },
  contributions: {
    calendar: '.js-calendar-graph', // The older contributions calendar (might be part of activity.container)
    activityListing: '.contribution-activity-listing', // Feed of contribution activities
  },
  sponsors: {
    section: '.js-profile-sponsors-section', // Section for GitHub Sponsors
  },
  achievements: {
    section: '.js-profile-achievements', // Section for achievements (badges)
  },
};