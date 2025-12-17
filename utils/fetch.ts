type FetchSuccess<T> = {
  ok: true;
  data: T;
  error: null;
};

type FetchError = {
  ok: false;
  data: null;
  error: string;
};

type FetchResult<T> = FetchSuccess<T> | FetchError;


export async function customFetch<T>(
  url: string,
): Promise<FetchResult<T>> {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      return {
        ok: false,
        data: null,
        error: `HTTP Error: ${response.status} ${response.statusText}`,
      };
    }

    const data: T = await response.json();

    return {
      ok: true,
      data,
      error: null,
    };
  } catch (err) {
    return {
      ok: false,
      data: null,
      error: err instanceof Error ? err.message : 'Unknown error',
    };
  }
}
