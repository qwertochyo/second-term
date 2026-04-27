import { useEffect, useState } from "react"

export const useLoading = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 5000);

    return () => clearTimeout(t);
  }, []);

  return { loading };
}