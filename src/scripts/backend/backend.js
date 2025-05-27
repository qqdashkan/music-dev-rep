import { API_URL, API_KEY, SERVER_URL } from "../../constants/api";

export async function fetchTracks(page) {
  try {
    const res = await fetch(
      `${API_URL}?method=geo.gettoptracks&country=ukraine&api_key=${API_KEY}&limit=25&page=${page}&format=json`,
    );
    const response = await res.json();
    return response;
  } catch (err) {
    console.error("Ошибка при получении треков:", err);
    return [];
  }
}

export async function getTrackInfo(name, title) {
  console.log(name, title);

  try {
    const res = await fetch(
      `${API_URL}?method=track.getInfo&api_key=${API_KEY}&artist=${name}&track=${title}&format=json`,
    );
    const response = await res.json();

    return response;
  } catch (err) {
    console.error("Ошибка при получении информации:", err);
    return [];
  }
}

export async function getTopArtists() {
  try {
    const res = await fetch(
      `${API_URL}?method=chart.gettopartists&api_key=${API_KEY}&limit=7&page=1&format=json`,
    );
    const response = await res.json();

    return response;
  } catch (err) {
    console.error("Ошибка при получении артистов:", err);
    return [];
  }
}

export async function getArtistInfo(name) {
  try {
    const res = await fetch(
      `${API_URL}?method=artist.getinfo&api_key=${API_KEY}&artist=${name}&format=json`,
    );
    const response = await res.json();

    return response;
  } catch (err) {
    console.error("Ошибка при получении информации:", err);
    return [];
  }
}

export async function fetchTopTracksByTag(page, tag) {
  try {
    const res = await fetch(
      `${API_URL}?method=tag.gettoptracks&tag=${tag}&api_key=${API_KEY}&limit=12&page=${page}&format=json`,
    );
    const response = await res.json();
    return response;
  } catch (err) {
    console.error("Ошибка при получении треков:", err);
    return [];
  }
}

export async function fetchWeeklyChartList(tag) {
  try {
    const res = await fetch(
      `${API_URL}?method=tag.getweeklychartlist&tag=${tag}&api_key=${API_KEY}&limit=6&format=json`,
    );
    const response = await res.json();
    return response;
  } catch (err) {
    console.error("Ошибка при получении треков:", err);
    return [];
  }
}

/* export async function deleteTrack(id) {
  try {
    await fetch(`https://api.deezer.com/track/${id}`, {
      method: "DELETE",
    });
  } catch (err) {
    console.error("Ошибка удаления:", err);
    return [];
  }
}

export async function addTrack(formatted) {
  try {
    await fetch(`https://api.deezer.com/track/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formatted),
    });
  } catch (err) {
    console.error("Ошибка удаления:", err);
    return [];
  }
} */

export async function searchTrackByName(name) {
  try {
    const res = await fetch(
      `${API_URL}?method=artist.search&artist=${name}&api_key=${API_KEY}&format=json`,
    );

    const response = await res.json();
    return response;
  } catch (err) {
    console.error("Ошибка при получении информации:", err);
    return [];
  }
}

/* export async function uploadAudioFile(id, file) {
  try {
    const res = await fetch(`${API_URL}/${id}/upload`, {
      method: "POST",
      body: file,
    });
    if (!res.ok) {
      const error = await res.json();
      throw new Error(error.message || "Ошибка при загрузке аудио");
    }
    const data = await res.json();
    console.log(res);

    console.log(data);
    return data;
  } catch (err) {
    console.error("Ошибка:", err);
    throw err;
  }
} */
