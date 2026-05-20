import type { CourseCategory } from "@/lib/types";
import {
  LEARNING_DOMAINS,
  getDomainById,
  domainForCourse,
  filterCoursesByDomain,
  type LearningDomainId,
} from "@/lib/ecosystem/domains";

export type CategoryGroupId = LearningDomainId;

/** @deprecated Prefer LEARNING_DOMAINS from @/lib/ecosystem/domains */
export const CATEGORY_GROUPS = LEARNING_DOMAINS.map((d) => ({
  id: d.id,
  label: d.label,
  description: d.description,
  categories: d.courseCategories,
}));

export function getGroupById(id: string) {
  return CATEGORY_GROUPS.find((g) => g.id === id);
}

export function groupForCategory(category: CourseCategory): CategoryGroupId {
  return domainForCourse(category);
}

export { LEARNING_DOMAINS, getDomainById, domainForCourse, filterCoursesByDomain };
