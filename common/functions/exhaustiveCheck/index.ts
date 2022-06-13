type ExhaustiveCheck = (check: never) => never
export const exhaustiveCheck: ExhaustiveCheck = (check) => check
