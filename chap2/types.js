/*

any;
- compiler does not check on our behalf, can set it to anything, try to avoid
- type is not checked

unknown:
- similar to any, can be of any type
- set type canged to another
- have to check the type of the variable first however, unless changing to
  any or unknown
- recommended by TSC team over any
- more cumbersome due to type guard checks required but safer than any

intersection and union:
- TSC compiler focuses on type shape, not the name
- intersection - create types by merging distinct types together, even dynamically
- union - can any of the provided types in the logical statement

literal:
- similar to union types but value possibilities are hardcoded

type aliases:
- giving the type a name for simplicity, readability etc
- type aliasing can be used for any type

function return types:
- if none provided, default to void, can declare as such to be explicit

functions as stypes:
- types can also be an entire function signature

never:
- function that never returns, variable that is not set to anything, not even null
- void returns undefined, never does not return, never finishes
- example, if error thrown, function doesn't return

classes:
- as usual, containers for fields and methods that can be insantiated and reused
- extra encapsulation features, ex. access modifiers

access modifiers:
- help with encapsulation in information hiding etc.
- with ECMAScript 2020, JavaScript natively supports private modifier, but
  only for fields through '#' character.
- private - accessible only from within the class
- readonly - read-only after set
- protected - accessible by parent and inheriting classes only

getters and setters:
- getter - property allowing modification of field before returning
- setter - property allowing modification of value before setting
- invoked like properties, and public

static properties and methods:
- belongs to the class, not an instance of it
- static members can be called by both static and instance members
- static members cannot call instance members

interfaces:
- abstracting internal working by only exposing type signatures
- aka contracts since set strict rules about IO of a type
- just a set of rules, need instance to define the actual work/implementation details
- allows instances to share structure with differing implementation details

inheritance:
- code reuse and commonality

namespaces:
- create scope and context, hide information in one scope and away from others
- members of a namespace will not bleed out to other files as part of the global scope etc
- ie the instantiations would also occur in the namespace as well

abstract classes:
- elements of class and interface
- implementation details as in class, signatures only as in interface
- absract classes cannot be directly insantiated, as they have abstract members
  which need to be implemented by inheriting classes

overriding:
- child class recreating/re-implementing member of parent class
  for a unique implementation of the parents memmber

interfaces:
- separate definition from implementation, thereby providing abstraction 

*/
