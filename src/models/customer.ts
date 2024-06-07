import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/database';


interface ClientAttributes {
  id: string;
  orgId: string;
  MSAValidFrom: Date;
  MSAValidUpto: Date;
  LegalName: string;
  NDASignedOn: Date;
  ShortName: string;
  NDAValidFrom: Date;
  NDAValidUpto: Date;
  AddressId: string;
  DisplayName: string;
  IsNDASigned: boolean;
  IsMSASigned: boolean;
  MSASignedOn: Date;
}

// attributes required for creating a Client
interface ClientCreationAttributes extends Optional<ClientAttributes, 'id'> {}

class Client extends Model<ClientAttributes, ClientCreationAttributes> implements ClientAttributes {
  public id!: string;
  public orgId!: string;
  public MSAValidFrom!: Date;
  public MSAValidUpto!: Date;
  public LegalName!: string;
  public NDASignedOn!: Date;
  public ShortName!: string;
  public NDAValidFrom!: Date;
  public NDAValidUpto!: Date;
  public AddressId!: string;
  public DisplayName!: string;
  public IsNDASigned!: boolean;
  public IsMSASigned!: boolean;
  public MSASignedOn!: Date;

 }


Client.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    orgId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    MSAValidFrom: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    MSAValidUpto: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    LegalName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    NDASignedOn: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    ShortName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    NDAValidFrom: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    NDAValidUpto: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    AddressId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    DisplayName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    IsNDASigned: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    IsMSASigned: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    MSASignedOn: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'clients', 
  }
);

export default Client;
