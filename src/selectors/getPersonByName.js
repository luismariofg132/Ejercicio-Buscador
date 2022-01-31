

const getPersonByName = (datos, name) => {
    name = name.toLocaleLowerCase()
    return datos.filter(pers => pers.name.toLocaleLowerCase().includes(name))
};

export default getPersonByName;


