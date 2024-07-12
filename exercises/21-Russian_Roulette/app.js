let firePosition = 1;

const spinChamber = () => {
    let chamberPosition = Math.floor((Math.random() * 6) + 1);
    return chamberPosition;
};

const fireGun = (bulletPosition) => {
    if (bulletPosition === firePosition) {
        return "You're dead!";
    } else {
        return "Keep playing!";
    }
};

console.log(fireGun(spinChamber()));

