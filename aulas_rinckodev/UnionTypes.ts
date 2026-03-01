// Union Types (|)

type Primitive = string | number | boolean // One or another


export function main(value: Primitive) {
    if (typeof value === "string") {  // Type Narrowing: Refinamento de tipos
        return;
    }
    value
    if (typeof value === "number") {
        return;
    }
    value
    if (typeof value === "boolean") {
        return;
    }
    value
}

enum TrafficLightType {
    Yellow,
    Red,
    Green
}

interface YellowColor {
    type: TrafficLightType.Yellow;
    wait(): void
}

interface RedColor {
    type: TrafficLightType.Red;
    stop(): void
}

interface GreenColor {
    type: TrafficLightType.Green;
    drive(): void
}

type TrafficLight = YellowColor | RedColor | GreenColor;

const trafficLight: TrafficLight = {
    type: TrafficLightType.Yellow,
    wait() {

    }
}



type ImageSize = 8 | 16 | 32 | 64 | 128 | 256 | 512 | 1024 | 2048

interface Image {
    name: string;
    size: ImageSize
}

const image: Image = {
    name: "WhatsApp Image",
    size: 1024
}


type JSONValue = string | number | boolean | JSONValue[] | {
    [key: string]: JSONValue
};

