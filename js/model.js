// For bussiness logic and state
export const state = {
  data: {},
  theme: {},
};
state.theme = localStorage.getItem("theme") || 'black';

export async function fetchData() {
  try {
    if (localStorage.getItem("data")) {
      state.data = JSON.parse(localStorage.getItem("data"));
      
    }
    else {
      const response = await fetch("https://profix-58b81a90e302.herokuapp.com/data");
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      state.data = await response.json();
    }
  } catch (error) {
    console.error(`Server didn't respond! ${error}`);
  }
}

export function setState(state) {
  localStorage.setItem('state', state);
}