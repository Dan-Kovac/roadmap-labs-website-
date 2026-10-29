/** Unpublished work stays on preview. Production omits it. */
export function showGated(flag: boolean, env = process.env.VERCEL_ENV) {
  return flag || env !== "production";
}
