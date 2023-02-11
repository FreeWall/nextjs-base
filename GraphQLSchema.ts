GraphQLSchema {
    __validationErrors: [],
    description: undefined,
    extensions: [Object: null prototype] {},
    astNode: {
      kind: 'SchemaDefinition',
      operationTypes: [ [Object] ],
      directives: []
    },
    extensionASTNodes: [],
    _queryType: GraphQLObjectType {
      name: 'Query',
      description: undefined,
      isTypeOf: undefined,
      extensions: [Object: null prototype] {},
      astNode: {
        kind: 'ObjectTypeDefinition',
        name: [Object],
        fields: [Array],
        interfaces: [],
        directives: []
      },
      extensionASTNodes: [],
      _fields: [Object: null prototype] {
        _entities: [Object],
        _service: [Object],
        countries: [Object],
        country: [Object],
        continents: [Object],
        continent: [Object],
        languages: [Object],
        language: [Object]
      },
      _interfaces: []
    },
    _mutationType: undefined,
    _subscriptionType: undefined,
    _directives: [
      GraphQLDirective {
        name: 'key',
        description: undefined,
        locations: [Array],
        isRepeatable: false,
        extensions: [Object: null prototype] {},
        astNode: [Object],
        args: [Array]
      },
      GraphQLDirective {
        name: 'extends',
        description: undefined,
        locations: [Array],
        isRepeatable: false,
        extensions: [Object: null prototype] {},
        astNode: [Object],
        args: []
      },
      GraphQLDirective {
        name: 'external',
        description: undefined,
        locations: [Array],
        isRepeatable: false,
        extensions: [Object: null prototype] {},
        astNode: [Object],
        args: []
      },
      GraphQLDirective {
        name: 'requires',
        description: undefined,
        locations: [Array],
        isRepeatable: false,
        extensions: [Object: null prototype] {},
        astNode: [Object],
        args: [Array]
      },
      GraphQLDirective {
        name: 'provides',
        description: undefined,
        locations: [Array],
        isRepeatable: false,
        extensions: [Object: null prototype] {},
        astNode: [Object],
        args: [Array]
      },
      GraphQLDirective {
        name: 'include',
        description: 'Directs the executor to include this field or fragment only when the `if` argument is true.',
        locations: [Array],
        isRepeatable: false,
        extensions: [Object: null prototype] {},
        astNode: undefined,
        args: [Array]
      },
      GraphQLDirective {
        name: 'skip',
        description: 'Directs the executor to skip this field or fragment when the `if` argument is true.',
        locations: [Array],
        isRepeatable: false,
        extensions: [Object: null prototype] {},
        astNode: undefined,
        args: [Array]
      },
      GraphQLDirective {
        name: 'deprecated',
        description: 'Marks an element of a GraphQL schema as no longer supported.',
        locations: [Array],
        isRepeatable: false,
        extensions: [Object: null prototype] {},
        astNode: undefined,
        args: [Array]
      },
      GraphQLDirective {
        name: 'specifiedBy',
        description: 'Exposes a URL that specifies the behavior of this scalar.',
        locations: [Array],
        isRepeatable: false,
        extensions: [Object: null prototype] {},
        astNode: undefined,
        args: [Array]
      }
    ],
    _typeMap: [Object: null prototype] {
      Country: GraphQLObjectType {
        name: 'Country',
        description: undefined,
        isTypeOf: undefined,
        extensions: [Object: null prototype] {},
        astNode: [Object],
        extensionASTNodes: [],
        _fields: [Object: null prototype],
        _interfaces: []
      },
      ID: GraphQLScalarType {
        name: 'ID',
        description: 'The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended
  to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.',
        specifiedByURL: undefined,
        serialize: [Function: serialize],
        parseValue: [Function: parseValue],
        parseLiteral: [Function: parseLiteral],
        extensions: [Object: null prototype] {},
        astNode: undefined,
        extensionASTNodes: []
      },
      String: GraphQLScalarType {
        name: 'String',
        description: 'The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.',
        specifiedByURL: undefined,
        serialize: [Function: serialize],
        parseValue: [Function: parseValue],
        parseLiteral: [Function: parseLiteral],
        extensions: [Object: null prototype] {},
        astNode: undefined,
        extensionASTNodes: []
      },
      Continent: GraphQLObjectType {
        name: 'Continent',
        description: undefined,
        isTypeOf: undefined,
        extensions: [Object: null prototype] {},
        astNode: [Object],
        extensionASTNodes: [],
        _fields: [Object: null prototype],
        _interfaces: []
      },
      Language: GraphQLObjectType {
        name: 'Language',
        description: undefined,
        isTypeOf: undefined,
        extensions: [Object: null prototype] {},
        astNode: [Object],
        extensionASTNodes: [],
        _fields: [Object: null prototype],
        _interfaces: []
      },
      Boolean: GraphQLScalarType {
        name: 'Boolean',
        description: 'The `Boolean` scalar type represents `true` or `false`.',
        specifiedByURL: undefined,
        serialize: [Function: serialize],
        parseValue: [Function: parseValue],
        parseLiteral: [Function: parseLiteral],
        extensions: [Object: null prototype] {},
        astNode: undefined,
        extensionASTNodes: []
      },
      State: GraphQLObjectType {
        name: 'State',
        description: undefined,
        isTypeOf: undefined,
        extensions: [Object: null prototype] {},
        astNode: [Object],
        extensionASTNodes: [],
        _fields: [Object: null prototype],
        _interfaces: []
      },
      StringQueryOperatorInput: GraphQLInputObjectType {
        name: 'StringQueryOperatorInput',
        description: undefined,
        extensions: [Object: null prototype] {},
        astNode: [Object],
        extensionASTNodes: [],
        _fields: [Object: null prototype]
      },
      CountryFilterInput: GraphQLInputObjectType {
        name: 'CountryFilterInput',
        description: undefined,
        extensions: [Object: null prototype] {},
        astNode: [Object],
        extensionASTNodes: [],
        _fields: [Object: null prototype]
      },
      ContinentFilterInput: GraphQLInputObjectType {
        name: 'ContinentFilterInput',
        description: undefined,
        extensions: [Object: null prototype] {},
        astNode: [Object],
        extensionASTNodes: [],
        _fields: [Object: null prototype]
      },
      LanguageFilterInput: GraphQLInputObjectType {
        name: 'LanguageFilterInput',
        description: undefined,
        extensions: [Object: null prototype] {},
        astNode: [Object],
        extensionASTNodes: [],
        _fields: [Object: null prototype]
      },
      Query: GraphQLObjectType {
        name: 'Query',
        description: undefined,
        isTypeOf: undefined,
        extensions: [Object: null prototype] {},
        astNode: [Object],
        extensionASTNodes: [],
        _fields: [Object: null prototype],
        _interfaces: []
      },
      _Entity: GraphQLUnionType {
        name: '_Entity',
        description: undefined,
        resolveType: undefined,
        extensions: [Object: null prototype] {},
        astNode: [Object],
        extensionASTNodes: [],
        _types: [Array]
      },
      _Any: GraphQLScalarType {
        name: '_Any',
        description: undefined,
        specifiedByURL: undefined,
        serialize: [Function: identityFunc],
        parseValue: [Function: identityFunc],
        parseLiteral: [Function (anonymous)],
        extensions: [Object: null prototype] {},
        astNode: [Object],
        extensionASTNodes: []
      },
      _Service: GraphQLObjectType {
        name: '_Service',
        description: undefined,
        isTypeOf: undefined,
        extensions: [Object: null prototype] {},
        astNode: [Object],
        extensionASTNodes: [],
        _fields: [Object: null prototype],
        _interfaces: []
      },
      __Schema: GraphQLObjectType {
        name: '__Schema',
        description: 'A GraphQL Schema defines the capabilities of a GraphQL server. It exposes all available types and directives on the server, as well as the entry points for query, mutation, and subscription operations.',
        isTypeOf: undefined,
        extensions: [Object: null prototype] {},
        astNode: undefined,
        extensionASTNodes: [],
        _fields: [Object: null prototype],
        _interfaces: []
      },
      __Type: GraphQLObjectType {
        name: '__Type',
        description: 'The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.\n' +
          '\n' +
          'Depending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name, description and optional `specifiedByURL`, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.',
        isTypeOf: undefined,
        extensions: [Object: null prototype] {},
        astNode: undefined,
        extensionASTNodes: [],
        _fields: [Object: null prototype],
        _interfaces: []
      },
      __TypeKind: GraphQLEnumType {
        name: '__TypeKind',
        description: 'An enum describing what kind of type a given `__Type` is.',
        extensions: [Object: null prototype] {},
        astNode: undefined,
        extensionASTNodes: [],
        _values: [Array],
        _valueLookup: [Map],
        _nameLookup: [Object: null prototype]
      },
      __Field: GraphQLObjectType {
        name: '__Field',
        description: 'Object and Interface types are described by a list of Fields, each of which has a name, potentially a list of arguments, and a return type.',
        isTypeOf: undefined,
        extensions: [Object: null prototype] {},
        astNode: undefined,
        extensionASTNodes: [],
        _fields: [Object: null prototype],
        _interfaces: []
      },
      __InputValue: GraphQLObjectType {
        name: '__InputValue',
        description: 'Arguments provided to Fields or Directives and the input fields of an InputObject are represented as Input Values which describe their type and optionally a default value.',
        isTypeOf: undefined,
        extensions: [Object: null prototype] {},
        astNode: undefined,
        extensionASTNodes: [],
        _fields: [Object: null prototype],
        _interfaces: []
      },
      __EnumValue: GraphQLObjectType {
        name: '__EnumValue',
        description: 'One possible value for a given Enum. Enum values are unique values, not a placeholder for a string or numeric value. However an Enum value is returned in a JSON response as a string.',
        isTypeOf: undefined,
        extensions: [Object: null prototype] {},
        astNode: undefined,
        extensionASTNodes: [],
        _fields: [Object: null prototype],
        _interfaces: []
      },
      __Directive: GraphQLObjectType {
        name: '__Directive',
        description: 'A Directive provides a way to describe alternate runtime execution and type validation behavior in a GraphQL document.\n' +
          '\n' +
          "In some cases, you need to provide options to alter GraphQL's execution behavior in ways field arguments will not suffice, such as conditionally including or skipping a field. Directives provide this by describing additional information to the executor.",
        isTypeOf: undefined,
        extensions: [Object: null prototype] {},
        astNode: undefined,
        extensionASTNodes: [],
        _fields: [Object: null prototype],
        _interfaces: []
      },
      __DirectiveLocation: GraphQLEnumType {
        name: '__DirectiveLocation',
        description: 'A Directive can be adjacent to many parts of the GraphQL language, a __DirectiveLocation describes one such possible adjacencies.',
        extensions: [Object: null prototype] {},
        astNode: undefined,
        extensionASTNodes: [],
        _values: [Array],
        _valueLookup: [Map],
        _nameLookup: [Object: null prototype]
      }
    },
    _subTypeMap: [Object: null prototype] {},
    _implementationsMap: [Object: null prototype] {}
  }
