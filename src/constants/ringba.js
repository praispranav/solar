import { useEffect, useState } from "react";

export const GENERATOR_QUERY = "generator";
export const RINGBA_SCRIPT_ID = "rgba_script"


export const RINGBA_COM_TAGS = [
  {
    key: "JS287f9e234b394dd6b7e29e2f6b98091c",
    user: "internal1",
    number: "1-866-790-0241", // change default no.
  },
  {
    key: 'JS8d271f1ea8034bda8e8c7f24e346e5cb',
    user: 'pranavtest',
    number: '1-866-578-2331',
  }
];

export function useRingbaUser(hist) {
  const [generator, setGenerator] = useState("");
  const activeUserKeyObj = RINGBA_COM_TAGS.find((i) => i.user === generator);

  useEffect(() => {
    setGenerator(hist.get(GENERATOR_QUERY));
  }, [hist && hist.get(GENERATOR_QUERY)]);

  if (activeUserKeyObj) return activeUserKeyObj;
  else return RINGBA_COM_TAGS[0]
}