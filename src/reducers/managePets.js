export let state;

// action = { type: 'ADD_PET', pet: {name: "", species: "", id: 0}}

export function managePets(state = { pets: [] }, action) {
  switch (action.type) {
    case "ADD_PET":
      // const pet = {
      //   id: action.pet.id,
      //   name: action.pet.name,
      //   species: action.pet.species
      // };
      return { pets: [...state.pets, action.pet] };
    case "REMOVE_PET":
      const filteredPets = [...state.pets].filter(pet => {
        return pet.id !== action.id;
      });
      return { pets: filteredPets };
    default:
      return state;
  }
}

export function dispatch(action) {
  state = managePets(state, action);
  render();
}

export function render() {
  const pets = state.pets.map(pet => {
    return `<li>${pet.name}</li>`;
  });

  document.getElementById("container").innerHTML = `<ul>${pets}</ul>`;
}
