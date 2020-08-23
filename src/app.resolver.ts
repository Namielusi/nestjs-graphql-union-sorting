import { Resolver, Query } from '@nestjs/graphql'
import { Item, ItemType } from './model';

@Resolver(() => Item)
export class AppResolver {
  @Query(() => [Item])
  items(): Item[] {
    return [
      {
        id: 'hello-world-first-id',
        settings: {
          $type: ItemType.First,
          foo: 'This SHOULD be displayed',
          bar: 'This should NOT be displayed'
        }
      },
      {
        id: 'hello-world-second-id',
        settings: {
          $type: ItemType.Second,
          foo: 'This should NOT be displayed',
          bar: 'This SHOULD be displayed'
        }
      }
    ]
  }
}
