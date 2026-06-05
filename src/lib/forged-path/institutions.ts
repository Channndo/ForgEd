import { withBasePath } from "@/lib/basePath";

export interface ForgedPathInstitution {
  id: string;
  name: string;
  logoSrc: string;
}

/** Institution registry — extend when adding schools to future ForgEd Path programs */
export const FORGED_PATH_INSTITUTIONS: Record<string, ForgedPathInstitution> = {
  harvard: {
    id: "harvard",
    name: "Harvard University",
    logoSrc: "/forged-path/institutions/harvard.png",
  },
  stanford: {
    id: "stanford",
    name: "Stanford University",
    logoSrc: "/forged-path/institutions/stanford.png",
  },
  cambridge: {
    id: "cambridge",
    name: "University of Cambridge",
    logoSrc: "/forged-path/institutions/cambridge.svg",
  },
  dartmouth: {
    id: "dartmouth",
    name: "Dartmouth College",
    logoSrc: "/forged-path/institutions/dartmouth.svg",
  },
  "notre-dame": {
    id: "notre-dame",
    name: "University of Notre Dame",
    logoSrc: "/forged-path/institutions/notre-dame.png",
  },
  yale: {
    id: "yale",
    name: "Yale University",
    logoSrc: "/forged-path/institutions/yale.svg",
  },
  cornell: {
    id: "cornell",
    name: "Cornell University",
    logoSrc: "/forged-path/institutions/cornell.png",
  },
  penn: {
    id: "penn",
    name: "University of Pennsylvania",
    logoSrc: "/forged-path/institutions/penn.png",
  },
  columbia: {
    id: "columbia",
    name: "Columbia University",
    logoSrc: "/forged-path/institutions/columbia.png",
  },
  princeton: {
    id: "princeton",
    name: "Princeton University",
    logoSrc: "/forged-path/institutions/princeton.svg",
  },
  brown: {
    id: "brown",
    name: "Brown University",
    logoSrc: "/forged-path/institutions/brown.png",
  },
};

const INSTITUTION_NAME_TO_ID: Record<string, string> = Object.fromEntries(
  Object.values(FORGED_PATH_INSTITUTIONS).map((inst) => [inst.name, inst.id])
);

export function getInstitutionId(institutionName: string): string | undefined {
  return INSTITUTION_NAME_TO_ID[institutionName];
}

export function getInstitution(institutionId: string): ForgedPathInstitution | undefined {
  return FORGED_PATH_INSTITUTIONS[institutionId];
}

export function institutionLogoUrl(institutionId: string): string {
  const inst = getInstitution(institutionId);
  return inst ? withBasePath(inst.logoSrc) : "";
}
