import { ObjectType, Field, ID, registerEnumType, createUnionType } from "@nestjs/graphql";

// ################################# Enum #################################

export enum ItemType {
  First = 'FIRST',
  Second = 'SECOND'
}

registerEnumType(ItemType, { name: 'ItemType' })

// ################################# Union #################################

class ItemBaseSettings {
  $type: string
}

@ObjectType()
export class ItemFirstSettings extends ItemBaseSettings {
  @Field()
  foo: string
}

@ObjectType()
export class ItemSecondSettings extends ItemBaseSettings {
  @Field()
  bar: string
}

type ItemSettings = ItemFirstSettings | ItemSecondSettings

const ItemSettingsUnion = createUnionType({
  name: 'ItemSettings',
  types: () => [ItemFirstSettings, ItemSecondSettings],
  resolveType: (value) => {
    switch (value.$type) {
      case ItemType.First: return ItemFirstSettings;
      case ItemType.Second: return ItemSecondSettings
      default: return undefined
    }
  }
})

// ################################# Object #################################

@ObjectType()
export class Item {
  @Field(() => ID)
  id: string

  @Field(() => ItemSettingsUnion)
  settings: ItemSettings
}
