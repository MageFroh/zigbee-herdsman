import DataType from './definition/dataType';
import BuffaloZclDataType from './definition/buffaloZclDataType';

interface Attribute {
    ID: number;
    type: DataType;
}

interface Parameter {
    name: string;
    type: DataType | BuffaloZclDataType;
}

interface Command {
    ID: number;
    parameters: Parameter[];
}

interface Cluster {
    ID: number;
    name: string;
    attributes: {[s: string]: Attribute};
    commands: {
        [s: string]: Command;
    };
    commandsResponse: {
        [s: string]: Command;
    };
};

type DataTypeValueType = 'ANALOG' | 'DISCRETE'

export {
    Cluster, Attribute, Command, Parameter, DataTypeValueType,
}