import {
  type as type__2, requireInstanceOf as requireInstanceOf__287, listedGet as listedGet_209, listBuilderAdd as listBuilderAdd_228, listBuilderToList as listBuilderToList_247, stringGet as stringGet_374, stringNext as stringNext_382, stringPrev as stringPrev_467, panic as panic_507, stringBuilderAppendCodePoint as stringBuilderAppendCodePoint_835
} from "@temperlang/core";
export class Node extends type__2() {
  /** @returns {string} */
  nodeType() {
    null;
  }
  /** @returns {string} */
  toString() {
    null;
  }
};
export class Location extends type__2() {
  /** @type {number} */
  #line_3;
  /** @type {number} */
  #column_4;
  /** @type {number} */
  #offset_5;
  /** @returns {string} */
  toString() {
    return String(this.#line_3.toString()) + ":" + this.#column_4.toString();
  }
  /**
   * @param {{
   *   line: number, column: number, offset: number
   * }}
   * props
   * @returns {Location}
   */
  static["new"](props) {
    return new Location(props.line, props.column, props.offset);
  }
  /**
   * @param {number} line_7
   * @param {number} column_8
   * @param {number} offset_9
   */
  constructor(line_7, column_8, offset_9) {
    super ();
    this.#line_3 = line_7;
    this.#column_4 = column_8;
    this.#offset_5 = offset_9;
    return;
  }
  /** @returns {number} */
  get line() {
    return this.#line_3;
  }
  /** @returns {number} */
  get column() {
    return this.#column_4;
  }
  /** @returns {number} */
  get offset() {
    return this.#offset_5;
  }
};
export class Span extends type__2() {
  /** @type {Location} */
  #start_13;
  /** @type {Location} */
  #end_14;
  /** @returns {string} */
  toString() {
    return String(this.#start_13.toString()) + "-" + this.#end_14.toString();
  }
  /**
   * @param {{
   *   start: Location, end: Location
   * }}
   * props
   * @returns {Span}
   */
  static["new"](props) {
    return new Span(props.start, props.end);
  }
  /**
   * @param {Location} start_16
   * @param {Location} end_17
   */
  constructor(start_16, end_17) {
    super ();
    this.#start_13 = start_16;
    this.#end_14 = end_17;
    return;
  }
  /** @returns {Location} */
  get start() {
    return this.#start_13;
  }
  /** @returns {Location} */
  get end() {
    return this.#end_14;
  }
};
export class Document extends type__2(Node) {
  /** @type {Array<Node>} */
  #children_20;
  /** @type {Span | null} */
  #span_21;
  /** @returns {string} */
  nodeType() {
    return "document";
  }
  /** @returns {string} */
  toString() {
    return "Document(" + this.#children_20.length.toString() + " children)";
  }
  /**
   * @param {{
   *   children: Array<Node>, span: Span | null
   * }}
   * props
   * @returns {Document}
   */
  static["new"](props) {
    return new Document(props.children, props.span);
  }
  /**
   * @param {Array<Node>} children_24
   * @param {Span | null} span_25
   */
  constructor(children_24, span_25) {
    super ();
    this.#children_20 = children_24;
    this.#span_21 = span_25;
    return;
  }
  /** @returns {Array<Node>} */
  get children() {
    return this.#children_20;
  }
  /** @returns {Span | null} */
  get span() {
    return this.#span_21;
  }
};
export class Text extends type__2(Node) {
  /** @type {string} */
  #content_28;
  /** @type {Span | null} */
  #span_29;
  /** @returns {string} */
  nodeType() {
    return "text";
  }
  /** @returns {string} */
  toString() {
    return "Text(" + "\u0022" + this.#content_28 + "\u0022" + ")";
  }
  /**
   * @param {{
   *   content: string, span: Span | null
   * }}
   * props
   * @returns {Text}
   */
  static["new"](props) {
    return new Text(props.content, props.span);
  }
  /**
   * @param {string} content_32
   * @param {Span | null} span_33
   */
  constructor(content_32, span_33) {
    super ();
    this.#content_28 = content_32;
    this.#span_29 = span_33;
    return;
  }
  /** @returns {string} */
  get content() {
    return this.#content_28;
  }
  /** @returns {Span | null} */
  get span() {
    return this.#span_29;
  }
};
export class Element extends type__2(Node) {
  /** @type {string} */
  #tag_36;
  /** @type {Array<Attribute>} */
  #attributes_37;
  /** @type {Array<Node>} */
  #children_38;
  /** @type {boolean} */
  #selfClosing_39;
  /** @type {Span | null} */
  #span_40;
  /** @returns {string} */
  nodeType() {
    return "element";
  }
  /** @returns {string} */
  toString() {
    return "\u003c" + this.#tag_36 + "\u003e";
  }
  /**
   * @param {{
   *   tag: string, attributes: Array<Attribute>, children: Array<Node>, selfClosing: boolean, span: Span | null
   * }}
   * props
   * @returns {Element}
   */
  static["new"](props) {
    return new Element(props.tag, props.attributes, props.children, props.selfClosing, props.span);
  }
  /**
   * @param {string} tag_43
   * @param {Array<Attribute>} attributes_44
   * @param {Array<Node>} children_45
   * @param {boolean} selfClosing_46
   * @param {Span | null} span_47
   */
  constructor(tag_43, attributes_44, children_45, selfClosing_46, span_47) {
    super ();
    this.#tag_36 = tag_43;
    this.#attributes_37 = attributes_44;
    this.#children_38 = children_45;
    this.#selfClosing_39 = selfClosing_46;
    this.#span_40 = span_47;
    return;
  }
  /** @returns {string} */
  get tag() {
    return this.#tag_36;
  }
  /** @returns {Array<Attribute>} */
  get attributes() {
    return this.#attributes_37;
  }
  /** @returns {Array<Node>} */
  get children() {
    return this.#children_38;
  }
  /** @returns {boolean} */
  get selfClosing() {
    return this.#selfClosing_39;
  }
  /** @returns {Span | null} */
  get span() {
    return this.#span_40;
  }
};
export class Attribute extends type__2() {
  /** @returns {string} */
  attributeType() {
    null;
  }
};
export class StaticAttribute extends type__2(Attribute) {
  /** @type {string} */
  #name_54;
  /** @type {string} */
  #value_55;
  /** @type {Span | null} */
  #span_56;
  /** @returns {string} */
  attributeType() {
    return "static";
  }
  /**
   * @param {{
   *   name: string, value: string, span: Span | null
   * }}
   * props
   * @returns {StaticAttribute}
   */
  static["new"](props) {
    return new StaticAttribute(props.name, props.value, props.span);
  }
  /**
   * @param {string} name_58
   * @param {string} value_59
   * @param {Span | null} span_60
   */
  constructor(name_58, value_59, span_60) {
    super ();
    this.#name_54 = name_58;
    this.#value_55 = value_59;
    this.#span_56 = span_60;
    return;
  }
  /** @returns {string} */
  get name() {
    return this.#name_54;
  }
  /** @returns {string} */
  get value() {
    return this.#value_55;
  }
  /** @returns {Span | null} */
  get span() {
    return this.#span_56;
  }
};
export class DynamicAttribute extends type__2(Attribute) {
  /** @type {string} */
  #name_64;
  /** @type {Expression} */
  #expression_65;
  /** @type {Span | null} */
  #span_66;
  /** @returns {string} */
  attributeType() {
    return "dynamic";
  }
  /**
   * @param {{
   *   name: string, expression: Expression, span: Span | null
   * }}
   * props
   * @returns {DynamicAttribute}
   */
  static["new"](props) {
    return new DynamicAttribute(props.name, props.expression, props.span);
  }
  /**
   * @param {string} name_68
   * @param {Expression} expression_69
   * @param {Span | null} span_70
   */
  constructor(name_68, expression_69, span_70) {
    super ();
    this.#name_64 = name_68;
    this.#expression_65 = expression_69;
    this.#span_66 = span_70;
    return;
  }
  /** @returns {string} */
  get name() {
    return this.#name_64;
  }
  /** @returns {Expression} */
  get expression() {
    return this.#expression_65;
  }
  /** @returns {Span | null} */
  get span() {
    return this.#span_66;
  }
};
export class SpreadAttribute extends type__2(Attribute) {
  /** @type {Expression} */
  #expression_74;
  /** @type {Span | null} */
  #span_75;
  /** @returns {string} */
  attributeType() {
    return "spread";
  }
  /**
   * @param {{
   *   expression: Expression, span: Span | null
   * }}
   * props
   * @returns {SpreadAttribute}
   */
  static["new"](props) {
    return new SpreadAttribute(props.expression, props.span);
  }
  /**
   * @param {Expression} expression_77
   * @param {Span | null} span_78
   */
  constructor(expression_77, span_78) {
    super ();
    this.#expression_74 = expression_77;
    this.#span_75 = span_78;
    return;
  }
  /** @returns {Expression} */
  get expression() {
    return this.#expression_74;
  }
  /** @returns {Span | null} */
  get span() {
    return this.#span_75;
  }
};
export class SpecialAttribute extends type__2(Attribute) {
  /** @type {string} */
  #kind_81;
  /** @type {Expression} */
  #expression_82;
  /** @type {Span | null} */
  #span_83;
  /** @returns {string} */
  attributeType() {
    return "special";
  }
  /**
   * @param {{
   *   kind: string, expression: Expression, span: Span | null
   * }}
   * props
   * @returns {SpecialAttribute}
   */
  static["new"](props) {
    return new SpecialAttribute(props.kind, props.expression, props.span);
  }
  /**
   * @param {string} kind_85
   * @param {Expression} expression_86
   * @param {Span | null} span_87
   */
  constructor(kind_85, expression_86, span_87) {
    super ();
    this.#kind_81 = kind_85;
    this.#expression_82 = expression_86;
    this.#span_83 = span_87;
    return;
  }
  /** @returns {string} */
  get kind() {
    return this.#kind_81;
  }
  /** @returns {Expression} */
  get expression() {
    return this.#expression_82;
  }
  /** @returns {Span | null} */
  get span() {
    return this.#span_83;
  }
};
export class Expression extends type__2(Node) {
  /** @type {string} */
  #code_91;
  /** @type {Span | null} */
  #span_92;
  /** @returns {string} */
  nodeType() {
    return "expression";
  }
  /** @returns {string} */
  toString() {
    return "Expression(" + this.#code_91 + ")";
  }
  /**
   * @param {{
   *   code: string, span: Span | null
   * }}
   * props
   * @returns {Expression}
   */
  static["new"](props) {
    return new Expression(props.code, props.span);
  }
  /**
   * @param {string} code_95
   * @param {Span | null} span_96
   */
  constructor(code_95, span_96) {
    super ();
    this.#code_91 = code_95;
    this.#span_92 = span_96;
    return;
  }
  /** @returns {string} */
  get code() {
    return this.#code_91;
  }
  /** @returns {Span | null} */
  get span() {
    return this.#span_92;
  }
};
export class ComponentType extends type__2() {
  /** @type {ComponentType} */
  static #Local_99 = new ComponentType("local");
  /** @returns {ComponentType} */
  static get Local() {
    return this.#Local_99;
  }
  /** @type {ComponentType} */
  static #Remote_100 = new ComponentType("remote");
  /** @returns {ComponentType} */
  static get Remote() {
    return this.#Remote_100;
  }
  /** @type {string} */
  #kind_101;
  /** @param {string} k_102 */
  constructor(k_102) {
    super ();
    this.#kind_101 = k_102;
    return;
  }
  /** @returns {string} */
  get kind() {
    return this.#kind_101;
  }
  /** @param {string} newKind_105 */
  set kind(newKind_105) {
    this.#kind_101 = newKind_105;
    return;
  }
};
export class Component extends type__2(Node) {
  /** @type {ComponentType} */
  #componentType_106;
  /** @type {string} */
  #name_107;
  /** @type {Array<Attribute>} */
  #attributes_108;
  /** @type {Array<Node>} */
  #children_109;
  /** @type {Array<Slot>} */
  #slots_110;
  /** @type {Span | null} */
  #span_111;
  /** @returns {string} */
  nodeType() {
    return "component";
  }
  /** @returns {string} */
  toString() {
    let return_114;
    if (this.#componentType_106.kind === "local") {
      return_114 = "\u003c." + this.#name_107 + "\u003e";
    } else {
      return_114 = "\u003c" + this.#name_107 + "\u003e";
    }
    return return_114;
  }
  /**
   * @param {{
   *   componentType: ComponentType, name: string, attributes: Array<Attribute>, children: Array<Node>, slots: Array<Slot>, span: Span | null
   * }}
   * props
   * @returns {Component}
   */
  static["new"](props) {
    return new Component(props.componentType, props.name, props.attributes, props.children, props.slots, props.span);
  }
  /**
   * @param {ComponentType} componentType_115
   * @param {string} name_116
   * @param {Array<Attribute>} attributes_117
   * @param {Array<Node>} children_118
   * @param {Array<Slot>} slots_119
   * @param {Span | null} span_120
   */
  constructor(componentType_115, name_116, attributes_117, children_118, slots_119, span_120) {
    super ();
    this.#componentType_106 = componentType_115;
    this.#name_107 = name_116;
    this.#attributes_108 = attributes_117;
    this.#children_109 = children_118;
    this.#slots_110 = slots_119;
    this.#span_111 = span_120;
    return;
  }
  /** @returns {ComponentType} */
  get componentType() {
    return this.#componentType_106;
  }
  /** @returns {string} */
  get name() {
    return this.#name_107;
  }
  /** @returns {Array<Attribute>} */
  get attributes() {
    return this.#attributes_108;
  }
  /** @returns {Array<Node>} */
  get children() {
    return this.#children_109;
  }
  /** @returns {Array<Slot>} */
  get slots() {
    return this.#slots_110;
  }
  /** @returns {Span | null} */
  get span() {
    return this.#span_111;
  }
};
export class Slot extends type__2(Node) {
  /** @type {string} */
  #name_127;
  /** @type {Array<Attribute>} */
  #attributes_128;
  /** @type {Array<Node>} */
  #children_129;
  /** @type {string | null} */
  #letBinding_130;
  /** @type {Span | null} */
  #span_131;
  /** @returns {string} */
  nodeType() {
    return "slot";
  }
  /** @returns {string} */
  toString() {
    return "\u003c:" + this.#name_127 + "\u003e";
  }
  /**
   * @param {{
   *   name: string, attributes: Array<Attribute>, children: Array<Node>, letBinding: string | null, span: Span | null
   * }}
   * props
   * @returns {Slot}
   */
  static["new"](props) {
    return new Slot(props.name, props.attributes, props.children, props.letBinding, props.span);
  }
  /**
   * @param {string} name_134
   * @param {Array<Attribute>} attributes_135
   * @param {Array<Node>} children_136
   * @param {string | null} letBinding_137
   * @param {Span | null} span_138
   */
  constructor(name_134, attributes_135, children_136, letBinding_137, span_138) {
    super ();
    this.#name_127 = name_134;
    this.#attributes_128 = attributes_135;
    this.#children_129 = children_136;
    this.#letBinding_130 = letBinding_137;
    this.#span_131 = span_138;
    return;
  }
  /** @returns {string} */
  get name() {
    return this.#name_127;
  }
  /** @returns {Array<Attribute>} */
  get attributes() {
    return this.#attributes_128;
  }
  /** @returns {Array<Node>} */
  get children() {
    return this.#children_129;
  }
  /** @returns {string | null} */
  get letBinding() {
    return this.#letBinding_130;
  }
  /** @returns {Span | null} */
  get span() {
    return this.#span_131;
  }
};
export class EExType extends type__2() {
  /** @type {EExType} */
  static #Output_144 = new EExType("output");
  /** @returns {EExType} */
  static get Output() {
    return this.#Output_144;
  }
  /** @type {EExType} */
  static #Exec_145 = new EExType("exec");
  /** @returns {EExType} */
  static get Exec() {
    return this.#Exec_145;
  }
  /** @type {EExType} */
  static #Comment_146 = new EExType("comment");
  /** @returns {EExType} */
  static get Comment() {
    return this.#Comment_146;
  }
  /** @type {string} */
  #kind_147;
  /** @param {string} k_148 */
  constructor(k_148) {
    super ();
    this.#kind_147 = k_148;
    return;
  }
  /** @returns {string} */
  get kind() {
    return this.#kind_147;
  }
  /** @param {string} newKind_151 */
  set kind(newKind_151) {
    this.#kind_147 = newKind_151;
    return;
  }
};
export class EEx extends type__2(Node) {
  /** @type {EExType} */
  #eexType_152;
  /** @type {string} */
  #code_153;
  /** @type {Span | null} */
  #span_154;
  /** @returns {string} */
  nodeType() {
    return "eex";
  }
  /** @returns {string} */
  toString() {
    let return_157;
    if (this.#eexType_152.kind === "output") {
      return_157 = "\u003c%= " + this.#code_153 + " %\u003e";
    } else if (this.#eexType_152.kind === "comment") {
      return_157 = "\u003c%# " + this.#code_153 + " %\u003e";
    } else {
      return_157 = "\u003c% " + this.#code_153 + " %\u003e";
    }
    return return_157;
  }
  /**
   * @param {{
   *   eexType: EExType, code: string, span: Span | null
   * }}
   * props
   * @returns {EEx}
   */
  static["new"](props) {
    return new EEx(props.eexType, props.code, props.span);
  }
  /**
   * @param {EExType} eexType_158
   * @param {string} code_159
   * @param {Span | null} span_160
   */
  constructor(eexType_158, code_159, span_160) {
    super ();
    this.#eexType_152 = eexType_158;
    this.#code_153 = code_159;
    this.#span_154 = span_160;
    return;
  }
  /** @returns {EExType} */
  get eexType() {
    return this.#eexType_152;
  }
  /** @returns {string} */
  get code() {
    return this.#code_153;
  }
  /** @returns {Span | null} */
  get span() {
    return this.#span_154;
  }
};
export class EExBlock extends type__2(Node) {
  /** @type {string} */
  #blockType_164;
  /** @type {string} */
  #expression_165;
  /** @type {Array<EExClause>} */
  #clauses_166;
  /** @type {Span | null} */
  #span_167;
  /** @returns {string} */
  nodeType() {
    return "eex_block";
  }
  /** @returns {string} */
  toString() {
    return "\u003c%= " + this.#blockType_164 + " " + this.#expression_165 + " do %\u003e";
  }
  /**
   * @param {{
   *   blockType: string, expression: string, clauses: Array<EExClause>, span: Span | null
   * }}
   * props
   * @returns {EExBlock}
   */
  static["new"](props) {
    return new EExBlock(props.blockType, props.expression, props.clauses, props.span);
  }
  /**
   * @param {string} blockType_170
   * @param {string} expression_171
   * @param {Array<EExClause>} clauses_172
   * @param {Span | null} span_173
   */
  constructor(blockType_170, expression_171, clauses_172, span_173) {
    super ();
    this.#blockType_164 = blockType_170;
    this.#expression_165 = expression_171;
    this.#clauses_166 = clauses_172;
    this.#span_167 = span_173;
    return;
  }
  /** @returns {string} */
  get blockType() {
    return this.#blockType_164;
  }
  /** @returns {string} */
  get expression() {
    return this.#expression_165;
  }
  /** @returns {Array<EExClause>} */
  get clauses() {
    return this.#clauses_166;
  }
  /** @returns {Span | null} */
  get span() {
    return this.#span_167;
  }
};
export class EExClause extends type__2() {
  /** @type {string} */
  #clauseType_178;
  /** @type {string | null} */
  #expression_179;
  /** @type {Array<Node>} */
  #children_180;
  /** @type {Span | null} */
  #span_181;
  /** @returns {string} */
  toString() {
    return "\u003c% " + this.#clauseType_178 + " %\u003e";
  }
  /**
   * @param {{
   *   clauseType: string, expression: string | null, children: Array<Node>, span: Span | null
   * }}
   * props
   * @returns {EExClause}
   */
  static["new"](props) {
    return new EExClause(props.clauseType, props.expression, props.children, props.span);
  }
  /**
   * @param {string} clauseType_183
   * @param {string | null} expression_184
   * @param {Array<Node>} children_185
   * @param {Span | null} span_186
   */
  constructor(clauseType_183, expression_184, children_185, span_186) {
    super ();
    this.#clauseType_178 = clauseType_183;
    this.#expression_179 = expression_184;
    this.#children_180 = children_185;
    this.#span_181 = span_186;
    return;
  }
  /** @returns {string} */
  get clauseType() {
    return this.#clauseType_178;
  }
  /** @returns {string | null} */
  get expression() {
    return this.#expression_179;
  }
  /** @returns {Array<Node>} */
  get children() {
    return this.#children_180;
  }
  /** @returns {Span | null} */
  get span() {
    return this.#span_181;
  }
};
export class Comment extends type__2(Node) {
  /** @type {string} */
  #content_191;
  /** @type {Span | null} */
  #span_192;
  /** @returns {string} */
  nodeType() {
    return "comment";
  }
  /** @returns {string} */
  toString() {
    return "\u003c!-- " + this.#content_191 + " --\u003e";
  }
  /**
   * @param {{
   *   content: string, span: Span | null
   * }}
   * props
   * @returns {Comment}
   */
  static["new"](props) {
    return new Comment(props.content, props.span);
  }
  /**
   * @param {string} content_195
   * @param {Span | null} span_196
   */
  constructor(content_195, span_196) {
    super ();
    this.#content_191 = content_195;
    this.#span_192 = span_196;
    return;
  }
  /** @returns {string} */
  get content() {
    return this.#content_191;
  }
  /** @returns {Span | null} */
  get span() {
    return this.#span_192;
  }
};
export class Parser extends type__2() {
  /** @type {Array<Token>} */
  #tokens_199;
  /** @type {number} */
  #pos_200;
  /** @type {Array<string>} */
  #errors_201;
  /** @param {Array<Token>} tokenList_202 */
  constructor(tokenList_202) {
    super ();
    this.#tokens_199 = tokenList_202;
    this.#pos_200 = 0;
    return;
  }
  /** @returns {boolean} */
  isDone() {
    let return_204;
    let t_205;
    if (this.#pos_200 >= this.#tokens_199.length) {
      return_204 = true;
    } else {
      t_205 = this.current().tokenType;
      return_204 = Object.is(t_205, TokenType.EOF);
    }
    return return_204;
  }
  /** @returns {Token} */
  current() {
    let return_207;
    let t_208;
    if (this.#pos_200 >= this.#tokens_199.length) {
      t_208 = this.#tokens_199.length;
      return_207 = listedGet_209(this.#tokens_199, t_208 - 1 | 0);
    } else {
      return_207 = listedGet_209(this.#tokens_199, this.#pos_200);
    }
    return return_207;
  }
  /** @returns {TokenType} */
  peek() {
    return this.current().tokenType;
  }
  /** @returns {TokenType} */
  peekNext() {
    let return_212;
    let t_213;
    if ((this.#pos_200 + 1 | 0) >= this.#tokens_199.length) {
      return_212 = TokenType.EOF;
    } else {
      t_213 = listedGet_209(this.#tokens_199, this.#pos_200 + 1 | 0);
      return_212 = t_213.tokenType;
    }
    return return_212;
  }
  /**
   * @param {TokenType} t_215
   * @returns {boolean}
   */
  check(t_215) {
    return this.peek().kind === t_215.kind;
  }
  /** @returns {Token} */
  advance() {
    const tok_217 = this.current();
    let t_218 = this.#pos_200 + 1 | 0;
    this.#pos_200 = t_218;
    return tok_217;
  }
  /**
   * @param {TokenType} t_220
   * @returns {Token | null}
   */
  expect(t_220) {
    let return_221;
    let t_222;
    let t_223;
    if (this.check(t_220)) {
      return_221 = this.advance();
    } else {
      t_222 = t_220.kind;
      t_223 = this.peek().kind;
      this.error("Expected " + t_222 + ", got " + t_223);
      return_221 = null;
    }
    return return_221;
  }
  /** @param {string} msg_225 */
  error(msg_225) {
    const tok_226 = this.current();
    let t_227 = tok_226.span.start.toString();
    listBuilderAdd_228(this.#errors_201, String(t_227) + ": " + msg_225);
    return;
  }
  /** @returns {Array<Token>} */
  get tokens() {
    return this.#tokens_199;
  }
  /** @returns {number} */
  get pos() {
    return this.#pos_200;
  }
  /** @param {number} newPos_232 */
  set pos(newPos_232) {
    this.#pos_200 = newPos_232;
    return;
  }
  /** @returns {Array<string>} */
  get errors() {
    return this.#errors_201;
  }
  /** @param {Array<string>} newErrors_235 */
  set errors(newErrors_235) {
    this.#errors_201 = newErrors_235;
    return;
  }
};
/**
 * @param {Parser} p_237
 * @param {string | null} closingTag_238
 * @returns {Array<Node>}
 */
function parseChildren_236(p_237, closingTag_238) {
  let t_239;
  let t_240;
  let t_241;
  const children_242 = [];
  while (true) {
    if (! ! p_237.isDone()) {
      break;
    }
    if (!(closingTag_238 == null)) {
      const closingTag_243 = closingTag_238;
      t_239 = isClosingTag_244(p_237, closingTag_243);
      t_240 = t_239;
    } else {
      t_240 = false;
    }
    if (t_240) {
      break;
    }
    if (p_237.check(TokenType.SlotClose)) {
      break;
    }
    if (p_237.check(TokenType.ComponentClose)) {
      break;
    }
    if (p_237.check(TokenType.TagClose)) {
      break;
    }
    t_241 = parseNode_245(p_237);
    const node_246 = t_241;
    if (!(node_246 == null)) {
      listBuilderAdd_228(children_242, node_246);
    }
  }
  return listBuilderToList_247(children_242);
}
/**
 * @param {Parser} p_248
 * @returns {Node | null}
 */
function parseNode_245(p_248) {
  let return_249;
  const t_250 = p_248.peek();
  const kind_251 = t_250.kind;
  if (kind_251 === "text") {
    return_249 = parseText_252(p_248);
  } else if (kind_251 === "tag_open") {
    return_249 = parseElement_253(p_248);
  } else if (kind_251 === "component_open") {
    return_249 = parseComponent_254(p_248);
  } else if (kind_251 === "slot_open") {
    return_249 = parseSlot_255(p_248);
  } else if (kind_251 === "expr_open") {
    return_249 = parseExpression_256(p_248);
  } else if (kind_251 === "eex_open") {
    return_249 = parseEEx_257(p_248, EExType.Exec);
  } else if (kind_251 === "eex_output") {
    return_249 = parseEEx_257(p_248, EExType.Output);
  } else if (kind_251 === "eex_comment") {
    return_249 = parseEEx_257(p_248, EExType.Comment);
  } else if (kind_251 === "comment_open") {
    return_249 = parseComment_258(p_248);
  } else {
    p_248.error("Unexpected token: " + kind_251);
    p_248.advance();
    return_249 = null;
  }
  return return_249;
}
class ComponentBodyResult_259 extends type__2() {
  /** @type {Array<Node>} */
  #children_260;
  /** @type {Array<Slot>} */
  #slots_261;
  /**
   * @param {{
   *   children: Array<Node>, slots: Array<Slot>
   * }}
   * props
   * @returns {ComponentBodyResult_259}
   */
  static["new"](props) {
    return new ComponentBodyResult_259(props.children, props.slots);
  }
  /**
   * @param {Array<Node>} children_262
   * @param {Array<Slot>} slots_263
   */
  constructor(children_262, slots_263) {
    super ();
    this.#children_260 = children_262;
    this.#slots_261 = slots_263;
    return;
  }
  /** @returns {Array<Node>} */
  get children() {
    return this.#children_260;
  }
  /** @returns {Array<Slot>} */
  get slots() {
    return this.#slots_261;
  }
}
class RenderChars_266 extends type__2() {
  /** @type {number} */
  static #AMP_267 = 38;
  /** @returns {number} */
  static get AMP() {
    return this.#AMP_267;
  }
  /** @type {number} */
  static #LT_268 = 60;
  /** @returns {number} */
  static get LT() {
    return this.#LT_268;
  }
  /** @type {number} */
  static #GT_269 = 62;
  /** @returns {number} */
  static get GT() {
    return this.#GT_269;
  }
  /** @type {number} */
  static #DQUOTE_270 = 34;
  /** @returns {number} */
  static get DQUOTE() {
    return this.#DQUOTE_270;
  }
  /** @type {number} */
  static #BACKSLASH_271 = 92;
  /** @returns {number} */
  static get BACKSLASH() {
    return this.#BACKSLASH_271;
  }
  /** @type {number} */
  static #NEWLINE_272 = 10;
  /** @returns {number} */
  static get NEWLINE() {
    return this.#NEWLINE_272;
  }
  /** @type {number} */
  static #CR_273 = 13;
  /** @returns {number} */
  static get CR() {
    return this.#CR_273;
  }
  /** @type {number} */
  static #TAB_274 = 9;
  /** @returns {number} */
  static get TAB() {
    return this.#TAB_274;
  }
  constructor() {
    super ();
    return;
  }
}
/**
 * @param {Node} node_276
 * @param {globalThis.Array<string>} out_277
 */
function renderNode_275(node_276, out_277) {
  let t_278;
  let t_279;
  let t_280;
  let t_281;
  let t_282;
  let t_283;
  let t_284;
  let t_285;
  let t_286;
  if (node_276 instanceof Text) {
    t_278 = requireInstanceOf__287(node_276, Text).content;
    t_279 = escapeHtml_288(t_278);
    out_277[0] += t_279;
  } else if (node_276 instanceof Element) {
    t_280 = requireInstanceOf__287(node_276, Element);
    renderElement_289(t_280, out_277);
  } else if (node_276 instanceof Component) {
    t_281 = requireInstanceOf__287(node_276, Component);
    renderComponent_290(t_281, out_277);
  } else if (node_276 instanceof Slot) {
    t_282 = requireInstanceOf__287(node_276, Slot);
    renderSlot_291(t_282, out_277);
  } else if (node_276 instanceof Expression) {
    t_283 = requireInstanceOf__287(node_276, Expression);
    renderExpression_292(t_283, out_277);
  } else if (node_276 instanceof EEx) {
    t_284 = requireInstanceOf__287(node_276, EEx);
    renderEEx_293(t_284, out_277);
  } else if (node_276 instanceof EExBlock) {
    t_285 = requireInstanceOf__287(node_276, EExBlock);
    renderEExBlock_294(t_285, out_277);
  } else if (node_276 instanceof Comment) {
    t_286 = requireInstanceOf__287(node_276, Comment);
    renderComment_295(t_286, out_277);
  }
  return;
}
export class TokenType extends type__2() {
  /** @type {TokenType} */
  static #Text_296 = new TokenType("text");
  /** @returns {TokenType} */
  static get Text() {
    return this.#Text_296;
  }
  /** @type {TokenType} */
  static #Whitespace_297 = new TokenType("whitespace");
  /** @returns {TokenType} */
  static get Whitespace() {
    return this.#Whitespace_297;
  }
  /** @type {TokenType} */
  static #TagOpen_298 = new TokenType("tag_open");
  /** @returns {TokenType} */
  static get TagOpen() {
    return this.#TagOpen_298;
  }
  /** @type {TokenType} */
  static #TagClose_299 = new TokenType("tag_close");
  /** @returns {TokenType} */
  static get TagClose() {
    return this.#TagClose_299;
  }
  /** @type {TokenType} */
  static #TagSelfClose_300 = new TokenType("tag_self_close");
  /** @returns {TokenType} */
  static get TagSelfClose() {
    return this.#TagSelfClose_300;
  }
  /** @type {TokenType} */
  static #TagEnd_301 = new TokenType("tag_end");
  /** @returns {TokenType} */
  static get TagEnd() {
    return this.#TagEnd_301;
  }
  /** @type {TokenType} */
  static #ComponentOpen_302 = new TokenType("component_open");
  /** @returns {TokenType} */
  static get ComponentOpen() {
    return this.#ComponentOpen_302;
  }
  /** @type {TokenType} */
  static #ComponentClose_303 = new TokenType("component_close");
  /** @returns {TokenType} */
  static get ComponentClose() {
    return this.#ComponentClose_303;
  }
  /** @type {TokenType} */
  static #SlotOpen_304 = new TokenType("slot_open");
  /** @returns {TokenType} */
  static get SlotOpen() {
    return this.#SlotOpen_304;
  }
  /** @type {TokenType} */
  static #SlotClose_305 = new TokenType("slot_close");
  /** @returns {TokenType} */
  static get SlotClose() {
    return this.#SlotClose_305;
  }
  /** @type {TokenType} */
  static #AttrName_306 = new TokenType("attr_name");
  /** @returns {TokenType} */
  static get AttrName() {
    return this.#AttrName_306;
  }
  /** @type {TokenType} */
  static #AttrEquals_307 = new TokenType("attr_equals");
  /** @returns {TokenType} */
  static get AttrEquals() {
    return this.#AttrEquals_307;
  }
  /** @type {TokenType} */
  static #AttrValue_308 = new TokenType("attr_value");
  /** @returns {TokenType} */
  static get AttrValue() {
    return this.#AttrValue_308;
  }
  /** @type {TokenType} */
  static #ExprOpen_309 = new TokenType("expr_open");
  /** @returns {TokenType} */
  static get ExprOpen() {
    return this.#ExprOpen_309;
  }
  /** @type {TokenType} */
  static #ExprClose_310 = new TokenType("expr_close");
  /** @returns {TokenType} */
  static get ExprClose() {
    return this.#ExprClose_310;
  }
  /** @type {TokenType} */
  static #ExprContent_311 = new TokenType("expr_content");
  /** @returns {TokenType} */
  static get ExprContent() {
    return this.#ExprContent_311;
  }
  /** @type {TokenType} */
  static #EExOpen_312 = new TokenType("eex_open");
  /** @returns {TokenType} */
  static get EExOpen() {
    return this.#EExOpen_312;
  }
  /** @type {TokenType} */
  static #EExOutput_313 = new TokenType("eex_output");
  /** @returns {TokenType} */
  static get EExOutput() {
    return this.#EExOutput_313;
  }
  /** @type {TokenType} */
  static #EExComment_314 = new TokenType("eex_comment");
  /** @returns {TokenType} */
  static get EExComment() {
    return this.#EExComment_314;
  }
  /** @type {TokenType} */
  static #EExClose_315 = new TokenType("eex_close");
  /** @returns {TokenType} */
  static get EExClose() {
    return this.#EExClose_315;
  }
  /** @type {TokenType} */
  static #EExContent_316 = new TokenType("eex_content");
  /** @returns {TokenType} */
  static get EExContent() {
    return this.#EExContent_316;
  }
  /** @type {TokenType} */
  static #CommentOpen_317 = new TokenType("comment_open");
  /** @returns {TokenType} */
  static get CommentOpen() {
    return this.#CommentOpen_317;
  }
  /** @type {TokenType} */
  static #CommentClose_318 = new TokenType("comment_close");
  /** @returns {TokenType} */
  static get CommentClose() {
    return this.#CommentClose_318;
  }
  /** @type {TokenType} */
  static #CommentContent_319 = new TokenType("comment_content");
  /** @returns {TokenType} */
  static get CommentContent() {
    return this.#CommentContent_319;
  }
  /** @type {TokenType} */
  static #EOF_320 = new TokenType("eof");
  /** @returns {TokenType} */
  static get EOF() {
    return this.#EOF_320;
  }
  /** @type {string} */
  #kind_321;
  /** @param {string} k_322 */
  constructor(k_322) {
    super ();
    this.#kind_321 = k_322;
    return;
  }
  /** @returns {string} */
  toString() {
    return this.#kind_321;
  }
  /** @returns {string} */
  get kind() {
    return this.#kind_321;
  }
  /** @param {string} newKind_326 */
  set kind(newKind_326) {
    this.#kind_321 = newKind_326;
    return;
  }
};
export class Token extends type__2() {
  /** @type {TokenType} */
  #tokenType_327;
  /** @type {string} */
  #value_328;
  /** @type {Span} */
  #span_329;
  /** @returns {string} */
  toString() {
    return String(this.#tokenType_327.kind) + "(" + "\u0022" + this.#value_328 + "\u0022" + ")";
  }
  /**
   * @param {{
   *   tokenType: TokenType, value: string, span: Span
   * }}
   * props
   * @returns {Token}
   */
  static["new"](props) {
    return new Token(props.tokenType, props.value, props.span);
  }
  /**
   * @param {TokenType} tokenType_331
   * @param {string} value_332
   * @param {Span} span_333
   */
  constructor(tokenType_331, value_332, span_333) {
    super ();
    this.#tokenType_327 = tokenType_331;
    this.#value_328 = value_332;
    this.#span_329 = span_333;
    return;
  }
  /** @returns {TokenType} */
  get tokenType() {
    return this.#tokenType_327;
  }
  /** @returns {string} */
  get value() {
    return this.#value_328;
  }
  /** @returns {Span} */
  get span() {
    return this.#span_329;
  }
};
class Chars_337 extends type__2() {
  /** @type {number} */
  static #LT_338 = 60;
  /** @returns {number} */
  static get LT() {
    return this.#LT_338;
  }
  /** @type {number} */
  static #GT_339 = 62;
  /** @returns {number} */
  static get GT() {
    return this.#GT_339;
  }
  /** @type {number} */
  static #SLASH_340 = 47;
  /** @returns {number} */
  static get SLASH() {
    return this.#SLASH_340;
  }
  /** @type {number} */
  static #COLON_341 = 58;
  /** @returns {number} */
  static get COLON() {
    return this.#COLON_341;
  }
  /** @type {number} */
  static #DOT_342 = 46;
  /** @returns {number} */
  static get DOT() {
    return this.#DOT_342;
  }
  /** @type {number} */
  static #LBRACE_343 = 123;
  /** @returns {number} */
  static get LBRACE() {
    return this.#LBRACE_343;
  }
  /** @type {number} */
  static #RBRACE_344 = 125;
  /** @returns {number} */
  static get RBRACE() {
    return this.#RBRACE_344;
  }
  /** @type {number} */
  static #PERCENT_345 = 37;
  /** @returns {number} */
  static get PERCENT() {
    return this.#PERCENT_345;
  }
  /** @type {number} */
  static #EQUALS_346 = 61;
  /** @returns {number} */
  static get EQUALS() {
    return this.#EQUALS_346;
  }
  /** @type {number} */
  static #HASH_347 = 35;
  /** @returns {number} */
  static get HASH() {
    return this.#HASH_347;
  }
  /** @type {number} */
  static #DQUOTE_348 = 34;
  /** @returns {number} */
  static get DQUOTE() {
    return this.#DQUOTE_348;
  }
  /** @type {number} */
  static #SQUOTE_349 = 39;
  /** @returns {number} */
  static get SQUOTE() {
    return this.#SQUOTE_349;
  }
  /** @type {number} */
  static #BACKSLASH_350 = 92;
  /** @returns {number} */
  static get BACKSLASH() {
    return this.#BACKSLASH_350;
  }
  /** @type {number} */
  static #DASH_351 = 45;
  /** @returns {number} */
  static get DASH() {
    return this.#DASH_351;
  }
  /** @type {number} */
  static #UNDERSCORE_352 = 95;
  /** @returns {number} */
  static get UNDERSCORE() {
    return this.#UNDERSCORE_352;
  }
  /** @type {number} */
  static #NEWLINE_353 = 10;
  /** @returns {number} */
  static get NEWLINE() {
    return this.#NEWLINE_353;
  }
  /** @type {number} */
  static #TAB_354 = 9;
  /** @returns {number} */
  static get TAB() {
    return this.#TAB_354;
  }
  /** @type {number} */
  static #CR_355 = 13;
  /** @returns {number} */
  static get CR() {
    return this.#CR_355;
  }
  /** @type {number} */
  static #SPACE_356 = 32;
  /** @returns {number} */
  static get SPACE() {
    return this.#SPACE_356;
  }
  /** @type {number} */
  static #BANG_357 = 33;
  /** @returns {number} */
  static get BANG() {
    return this.#BANG_357;
  }
  /** @type {number} */
  static #LOWER_A_358 = 97;
  /** @returns {number} */
  static get LOWER_A() {
    return this.#LOWER_A_358;
  }
  /** @type {number} */
  static #LOWER_Z_359 = 122;
  /** @returns {number} */
  static get LOWER_Z() {
    return this.#LOWER_Z_359;
  }
  /** @type {number} */
  static #UPPER_A_360 = 65;
  /** @returns {number} */
  static get UPPER_A() {
    return this.#UPPER_A_360;
  }
  /** @type {number} */
  static #UPPER_Z_361 = 90;
  /** @returns {number} */
  static get UPPER_Z() {
    return this.#UPPER_Z_361;
  }
  /** @type {number} */
  static #DIGIT_0_362 = 48;
  /** @returns {number} */
  static get DIGIT_0() {
    return this.#DIGIT_0_362;
  }
  /** @type {number} */
  static #DIGIT_9_363 = 57;
  /** @returns {number} */
  static get DIGIT_9() {
    return this.#DIGIT_9_363;
  }
  constructor() {
    super ();
    return;
  }
}
export class Tokenizer extends type__2() {
  /** @type {string} */
  #chars_364;
  /** @type {globalThis.number} */
  #pos_365;
  /** @type {number} */
  #line_366;
  /** @type {number} */
  #column_367;
  /** @type {Array<string>} */
  #errors_368;
  /** @type {Array<Token>} */
  #tokens_369;
  /** @param {string} input_370 */
  constructor(input_370) {
    super ();
    this.#chars_364 = input_370;
    this.#pos_365 = 0;
    this.#line_366 = 1;
    this.#column_367 = 1;
    return;
  }
  /** @returns {boolean} */
  isDone() {
    return !(this.#chars_364.length > this.#pos_365);
  }
  /** @returns {number | null} */
  peek() {
    let return_373;
    if (this.isDone()) {
      return_373 = null;
    } else {
      return_373 = stringGet_374(this.#chars_364, this.#pos_365);
    }
    return return_373;
  }
  /**
   * @param {number} n_376
   * @returns {number | null}
   */
  peekAhead(n_376) {
    let return_377;
    let t_378;
    fn_379: {
      let idx_380 = this.#pos_365;
      let i_381 = 0;
      while (i_381 < n_376) {
        if (!(this.#chars_364.length > idx_380)) {
          return_377 = null;
          break fn_379;
        }
        t_378 = stringNext_382(this.#chars_364, idx_380);
        idx_380 = t_378;
        i_381 = i_381 + 1 | 0;
      }
      if (this.#chars_364.length > idx_380) {
        return_377 = stringGet_374(this.#chars_364, idx_380);
      } else {
        return_377 = null;
      }
    }
    return return_377;
  }
  /**
   * @param {string} s_384
   * @returns {boolean}
   */
  matches(s_384) {
    let return_385;
    let t_386;
    let t_387;
    fn_388: {
      let pi_389 = this.#pos_365;
      let si_390 = 0;
      while (true) {
        if (!(s_384.length > si_390)) {
          break;
        }
        if (!(this.#chars_364.length > pi_389)) {
          return_385 = false;
          break fn_388;
        }
        if (stringGet_374(this.#chars_364, pi_389) !== stringGet_374(s_384, si_390)) {
          return_385 = false;
          break fn_388;
        }
        t_386 = stringNext_382(this.#chars_364, pi_389);
        pi_389 = t_386;
        t_387 = stringNext_382(s_384, si_390);
        si_390 = t_387;
      }
      return_385 = true;
    }
    return return_385;
  }
  /** @returns {number} */
  advance() {
    const c_392 = stringGet_374(this.#chars_364, this.#pos_365);
    let t_393 = stringNext_382(this.#chars_364, this.#pos_365);
    this.#pos_365 = t_393;
    if (c_392 === Chars_337.NEWLINE) {
      const t_394 = this.#line_366 + 1 | 0;
      this.#line_366 = t_394;
      this.#column_367 = 1;
    } else {
      const t_395 = this.#column_367 + 1 | 0;
      this.#column_367 = t_395;
    }
    return c_392;
  }
  /**
   * @param {number} n_397
   * @returns {string}
   */
  advanceBy(n_397) {
    let t_398;
    const start_399 = this.#pos_365;
    let i_400 = 0;
    while (i_400 < n_397) {
      if (this.#chars_364.length > this.#pos_365) {
        const c_401 = stringGet_374(this.#chars_364, this.#pos_365);
        t_398 = stringNext_382(this.#chars_364, this.#pos_365);
        this.#pos_365 = t_398;
        if (c_401 === Chars_337.NEWLINE) {
          const t_402 = this.#line_366 + 1 | 0;
          this.#line_366 = t_402;
          this.#column_367 = 1;
        } else {
          const t_403 = this.#column_367 + 1 | 0;
          this.#column_367 = t_403;
        }
      }
      i_400 = i_400 + 1 | 0;
    }
    return this.#chars_364.substring(start_399, this.#pos_365);
  }
  /**
   * @param {globalThis.number} start_405
   * @returns {string}
   */
  sliceFrom(start_405) {
    return this.#chars_364.substring(start_405, this.#pos_365);
  }
  /** @returns {Location} */
  location() {
    return new Location(this.#line_366, this.#column_367, 0);
  }
  /** @param {string} msg_408 */
  error(msg_408) {
    let t_409 = this.#line_366.toString();
    let t_410 = this.#column_367.toString();
    listBuilderAdd_228(this.#errors_368, String(t_409) + ":" + t_410 + ": " + msg_408);
    return;
  }
  /**
   * @param {TokenType} tokenType_412
   * @param {string} value_413
   * @param {Location} start_414
   */
  addToken(tokenType_412, value_413, start_414) {
    let t_415 = this.location();
    const span_416 = new Span(start_414, t_415);
    let t_417 = new Token(tokenType_412, value_413, span_416);
    listBuilderAdd_228(this.#tokens_369, t_417);
    return;
  }
  /** @returns {string} */
  get chars() {
    return this.#chars_364;
  }
  /** @returns {globalThis.number} */
  get pos() {
    return this.#pos_365;
  }
  /** @param {globalThis.number} newPos_421 */
  set pos(newPos_421) {
    this.#pos_365 = newPos_421;
    return;
  }
  /** @returns {number} */
  get line() {
    return this.#line_366;
  }
  /** @param {number} newLine_424 */
  set line(newLine_424) {
    this.#line_366 = newLine_424;
    return;
  }
  /** @returns {number} */
  get column() {
    return this.#column_367;
  }
  /** @param {number} newColumn_427 */
  set column(newColumn_427) {
    this.#column_367 = newColumn_427;
    return;
  }
  /** @returns {Array<string>} */
  get errors() {
    return this.#errors_368;
  }
  /** @param {Array<string>} newErrors_430 */
  set errors(newErrors_430) {
    this.#errors_368 = newErrors_430;
    return;
  }
  /** @returns {Array<Token>} */
  get tokens() {
    return this.#tokens_369;
  }
  /** @param {Array<Token>} newTokens_433 */
  set tokens(newTokens_433) {
    this.#tokens_369 = newTokens_433;
    return;
  }
};
/** @type {Array<string>} */
export const voidElements = Object.freeze(["area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "param", "source", "track", "wbr"]);
/**
 * @param {Array<string>} list_435
 * @param {string} item_436
 * @returns {boolean}
 */
function listContainsIgnoreCase_434(list_435, item_436) {
  let return_437;
  fn_438: {
    const this_439 = list_435;
    const n_440 = this_439.length;
    let i_441 = 0;
    while (i_441 < n_440) {
      const el_442 = listedGet_209(this_439, i_441);
      i_441 = i_441 + 1 | 0;
      const elem_443 = el_442;
      if (elem_443 === item_436) {
        return_437 = true;
        break fn_438;
      }
    }
    return_437 = false;
  }
  return return_437;
}
/**
 * @param {string} tag_444
 * @returns {boolean}
 */
export function isVoidElement(tag_444) {
  return listContainsIgnoreCase_434(voidElements, tag_444);
};
/**
 * @param {string} s_446
 * @param {number} c_447
 * @returns {boolean}
 */
function startsWithChar_445(s_446, c_447) {
  let return_448;
  let t_449;
  if (s_446.length > 0) {
    t_449 = stringGet_374(s_446, 0);
    return_448 = t_449 === c_447;
  } else {
    return_448 = false;
  }
  return return_448;
}
/**
 * @param {string} name_450
 * @returns {boolean}
 */
export function isLocalComponent(name_450) {
  return startsWithChar_445(name_450, 46);
};
/**
 * @param {string} name_451
 * @returns {boolean}
 */
export function isRemoteComponent(name_451) {
  let return_452;
  fn_453: {
    if (!(name_451.length > 0)) {
      return_452 = false;
      break fn_453;
    }
    const first_454 = stringGet_374(name_451, 0);
    if (first_454 >= 65) {
      return_452 = first_454 <= 90;
    } else {
      return_452 = false;
    }
  }
  return return_452;
};
/**
 * @param {string} name_455
 * @returns {boolean}
 */
export function isSlot(name_455) {
  return startsWithChar_445(name_455, 58);
};
/**
 * @param {number} c_456
 * @returns {boolean}
 */
export function isWhitespace(c_456) {
  let return_457;
  if (c_456 === Chars_337.SPACE) {
    return_457 = true;
  } else if (c_456 === Chars_337.TAB) {
    return_457 = true;
  } else if (c_456 === Chars_337.NEWLINE) {
    return_457 = true;
  } else {
    return_457 = c_456 === Chars_337.CR;
  }
  return return_457;
};
/**
 * @param {string} s_459
 * @returns {string}
 */
function trimString_458(s_459) {
  let return_460;
  let t_461;
  let t_462;
  let startIdx_463 = 0;
  let t_464 = s_459.length;
  let endIdx_465 = t_464;
  while (true) {
    if (!(s_459.length > startIdx_463)) {
      break;
    }
    const c_466 = stringGet_374(s_459, startIdx_463);
    if (! isWhitespace(c_466)) {
      break;
    }
    t_461 = stringNext_382(s_459, startIdx_463);
    startIdx_463 = t_461;
  }
  while (true) {
    t_462 = stringPrev_467(s_459, endIdx_465);
    if (!(s_459.length > t_462)) {
      break;
    }
    const prevIdx_468 = stringPrev_467(s_459, endIdx_465);
    if (!(s_459.length > prevIdx_468)) {
      break;
    }
    const c_469 = stringGet_374(s_459, prevIdx_468);
    if (! isWhitespace(c_469)) {
      break;
    }
    endIdx_465 = prevIdx_468;
  }
  if (!(s_459.length > startIdx_463)) {
    return_460 = "";
  } else {
    return_460 = s_459.substring(startIdx_463, endIdx_465);
  }
  return return_460;
}
/** @param {Tokenizer} t_471 */
function tokenizeEEx_470(t_471) {
  let t_472;
  let t_473;
  let t_474;
  const start_475 = t_471.location();
  t_471.advanceBy(2);
  let eexType_476 = TokenType.EExOpen;
  if (t_471.peek() === Chars_337.EQUALS) {
    t_471.advance();
    eexType_476 = TokenType.EExOutput;
  } else if (t_471.peek() === Chars_337.HASH) {
    t_471.advance();
    eexType_476 = TokenType.EExComment;
  }
  t_471.addToken(eexType_476, "", start_475);
  const startPos_477 = t_471.pos;
  while (true) {
    if (! t_471.isDone()) {
      t_472 = t_471.matches("%\u003e");
      t_474 = ! t_472;
    } else {
      t_474 = false;
    }
    if (! t_474) {
      break;
    }
    t_471.advance();
  }
  const content_478 = t_471.sliceFrom(startPos_477);
  let t_479 = trimString_458(content_478);
  t_471.addToken(TokenType.EExContent, t_479, start_475);
  if (t_471.matches("%\u003e")) {
    t_471.advanceBy(2);
    t_473 = t_471.location();
    t_471.addToken(TokenType.EExClose, "%\u003e", t_473);
  } else {
    t_471.error("Unterminated EEx expression");
  }
  return;
}
/** @param {Tokenizer} t_481 */
function tokenizeComment_480(t_481) {
  let t_482;
  let t_483;
  let t_484;
  const start_485 = t_481.location();
  t_481.advanceBy(4);
  t_481.addToken(TokenType.CommentOpen, "\u003c!--", start_485);
  const startPos_486 = t_481.pos;
  while (true) {
    if (! t_481.isDone()) {
      t_482 = t_481.matches("--\u003e");
      t_484 = ! t_482;
    } else {
      t_484 = false;
    }
    if (! t_484) {
      break;
    }
    t_481.advance();
  }
  const content_487 = t_481.sliceFrom(startPos_486);
  t_481.addToken(TokenType.CommentContent, content_487, start_485);
  if (t_481.matches("--\u003e")) {
    t_481.advanceBy(3);
    t_483 = t_481.location();
    t_481.addToken(TokenType.CommentClose, "--\u003e", t_483);
  } else {
    t_481.error("Unterminated comment");
  }
  return;
}
/**
 * @param {number} c_488
 * @returns {boolean}
 */
export function isAlpha(c_488) {
  let return_489;
  let t_490;
  if (c_488 >= Chars_337.LOWER_A) {
    t_490 = c_488 <= Chars_337.LOWER_Z;
  } else {
    t_490 = false;
  }
  if (t_490) {
    return_489 = true;
  } else if (c_488 >= Chars_337.UPPER_A) {
    return_489 = c_488 <= Chars_337.UPPER_Z;
  } else {
    return_489 = false;
  }
  return return_489;
};
/**
 * @param {number} c_491
 * @returns {boolean}
 */
export function isNameStart(c_491) {
  let return_492;
  if (isAlpha(c_491)) {
    return_492 = true;
  } else {
    return_492 = c_491 === Chars_337.UNDERSCORE;
  }
  return return_492;
};
/**
 * @param {number} c_493
 * @returns {boolean}
 */
export function isDigit(c_493) {
  let return_494;
  if (c_493 >= Chars_337.DIGIT_0) {
    return_494 = c_493 <= Chars_337.DIGIT_9;
  } else {
    return_494 = false;
  }
  return return_494;
};
/**
 * @param {number} c_495
 * @returns {boolean}
 */
export function isAlphaNumeric(c_495) {
  let return_496;
  if (isAlpha(c_495)) {
    return_496 = true;
  } else {
    return_496 = isDigit(c_495);
  }
  return return_496;
};
/**
 * @param {number} c_497
 * @returns {boolean}
 */
export function isNameChar(c_497) {
  let return_498;
  if (isAlphaNumeric(c_497)) {
    return_498 = true;
  } else if (c_497 === Chars_337.UNDERSCORE) {
    return_498 = true;
  } else if (c_497 === Chars_337.DASH) {
    return_498 = true;
  } else {
    return_498 = c_497 === Chars_337.DOT;
  }
  return return_498;
};
/**
 * @param {Tokenizer} t_500
 * @returns {string}
 */
function readName_499(t_500) {
  let t_501;
  let t_502;
  let t_503;
  let t_504;
  const startPos_505 = t_500.pos;
  const firstChar_506 = t_500.peek();
  if (!(firstChar_506 == null)) {
    t_501 = Number.isSafeInteger(firstChar_506);
  } else {
    t_501 = false;
  }
  if (t_501) {
    if (firstChar_506 == null) {
      t_504 = panic_507();
    } else {
      t_504 = firstChar_506;
    }
    if (isNameStart(t_504)) {
      t_500.advance();
      while (true) {
        if (! ! t_500.isDone()) {
          break;
        }
        const nextChar_508 = t_500.peek();
        if (!(nextChar_508 == null)) {
          t_502 = Number.isSafeInteger(nextChar_508);
        } else {
          t_502 = false;
        }
        if (t_502) {
          if (nextChar_508 == null) {
            t_503 = panic_507();
          } else {
            t_503 = nextChar_508;
          }
          if (isNameChar(t_503)) {
            t_500.advance();
          } else {
            break;
          }
        } else {
          break;
        }
      }
    }
  }
  return t_500.sliceFrom(startPos_505);
}
/** @param {Tokenizer} t_510 */
function skipWhitespace_509(t_510) {
  let t_511;
  while (true) {
    if (! ! t_510.isDone()) {
      break;
    }
    const c_512 = t_510.peek();
    if (!(c_512 == null)) {
      const c_513 = c_512;
      t_511 = isWhitespace(c_513);
    } else {
      t_511 = false;
    }
    if (t_511) {
      t_510.advance();
    } else {
      break;
    }
  }
  return;
}
/**
 * @param {Tokenizer} t_515
 * @param {Location} start_516
 */
function tokenizeClosingTag_514(t_515, start_516) {
  let return_517;
  fn_518: {
    const c_519 = t_515.peek();
    if (c_519 === Chars_337.COLON) {
      t_515.advance();
      const name_520 = readName_499(t_515);
      skipWhitespace_509(t_515);
      if (t_515.peek() === Chars_337.GT) {
        t_515.advance();
      }
      t_515.addToken(TokenType.SlotClose, name_520, start_516);
      return_517 = void 0;
      break fn_518;
    }
    if (c_519 === Chars_337.DOT) {
      t_515.advance();
      const name_521 = readName_499(t_515);
      skipWhitespace_509(t_515);
      if (t_515.peek() === Chars_337.GT) {
        t_515.advance();
      }
      t_515.addToken(TokenType.ComponentClose, "." + name_521, start_516);
      return_517 = void 0;
      break fn_518;
    }
    const name_522 = readName_499(t_515);
    skipWhitespace_509(t_515);
    if (t_515.peek() === Chars_337.GT) {
      t_515.advance();
    }
    if (isRemoteComponent(name_522)) {
      t_515.addToken(TokenType.ComponentClose, name_522, start_516);
    } else {
      t_515.addToken(TokenType.TagClose, name_522, start_516);
    }
    return_517 = void 0;
  }
  return return_517;
}
/** @param {Tokenizer} t_524 */
function tokenizeExpression_523(t_524) {
  let t_525;
  let t_526;
  let t_527;
  let t_528;
  let t_529;
  const start_530 = t_524.location();
  t_524.advance();
  t_524.addToken(TokenType.ExprOpen, "{", start_530);
  const startPos_531 = t_524.pos;
  let depth_532 = 1;
  while (true) {
    if (! t_524.isDone()) {
      t_527 = depth_532 > 0;
    } else {
      t_527 = false;
    }
    if (! t_527) {
      break;
    }
    const c_533 = t_524.peek();
    if (c_533 === Chars_337.LBRACE) {
      depth_532 = depth_532 + 1 | 0;
      t_524.advance();
    } else if (c_533 === Chars_337.RBRACE) {
      depth_532 = depth_532 - 1 | 0;
      if (depth_532 > 0) {
        t_524.advance();
      }
    } else {
      if (c_533 === Chars_337.DQUOTE) {
        t_528 = true;
      } else {
        t_528 = c_533 === Chars_337.SQUOTE;
      }
      if (t_528) {
        const quote_534 = c_533;
        t_524.advance();
        while (true) {
          if (! t_524.isDone()) {
            t_525 = t_524.peek();
            t_529 = t_525 !== quote_534;
          } else {
            t_529 = false;
          }
          if (! t_529) {
            break;
          }
          if (t_524.peek() === Chars_337.BACKSLASH) {
            t_524.advance();
          }
          if (! t_524.isDone()) {
            t_524.advance();
          }
        }
        if (! t_524.isDone()) {
          t_524.advance();
        }
      } else {
        t_524.advance();
      }
    }
  }
  const content_535 = t_524.chars.substring(startPos_531, t_524.pos);
  t_524.addToken(TokenType.ExprContent, content_535, start_530);
  if (t_524.peek() === Chars_337.RBRACE) {
    t_524.advance();
    t_526 = t_524.location();
    t_524.addToken(TokenType.ExprClose, "}", t_526);
  } else {
    t_524.error("Unterminated expression");
  }
  return;
}
/** @param {Tokenizer} t_537 */
function tokenizeSpreadAttribute_536(t_537) {
  tokenizeExpression_523(t_537);
  return;
}
/** @param {Tokenizer} t_539 */
function tokenizeAttributeValue_538(t_539) {
  let return_540;
  let t_541;
  let t_542;
  let t_543;
  let t_544;
  let t_545;
  let t_546;
  fn_547: {
    const start_548 = t_539.location();
    const c_549 = t_539.peek();
    if (c_549 === Chars_337.LBRACE) {
      tokenizeExpression_523(t_539);
      return_540 = void 0;
      break fn_547;
    }
    if (c_549 === Chars_337.DQUOTE) {
      t_542 = true;
    } else {
      t_542 = c_549 === Chars_337.SQUOTE;
    }
    if (t_542) {
      const quote_550 = t_539.advance();
      const startPos_551 = t_539.pos;
      while (true) {
        if (! t_539.isDone()) {
          t_541 = t_539.peek();
          t_543 = t_541 !== quote_550;
        } else {
          t_543 = false;
        }
        if (! t_543) {
          break;
        }
        t_539.advance();
      }
      const value_552 = t_539.sliceFrom(startPos_551);
      if (t_539.peek() === quote_550) {
        t_539.advance();
      } else {
        t_539.error("Unterminated string");
      }
      t_539.addToken(TokenType.AttrValue, value_552, start_548);
      return_540 = void 0;
      break fn_547;
    }
    const startPos_553 = t_539.pos;
    while (true) {
      if (! ! t_539.isDone()) {
        break;
      }
      const ch_554 = t_539.peek();
      if (ch_554 == null) {
        t_546 = true;
      } else {
        const ch_555 = ch_554;
        if (isWhitespace(ch_555)) {
          t_545 = true;
        } else {
          if (ch_555 === Chars_337.GT) {
            t_544 = true;
          } else {
            t_544 = ch_555 === Chars_337.SLASH;
          }
          t_545 = t_544;
        }
        t_546 = t_545;
      }
      if (t_546) {
        break;
      }
      t_539.advance();
    }
    const value_556 = t_539.sliceFrom(startPos_553);
    if (! ! value_556) {
      t_539.addToken(TokenType.AttrValue, value_556, start_548);
    }
    return_540 = void 0;
  }
  return return_540;
}
/** @param {Tokenizer} t_558 */
function tokenizeSpecialAttribute_557(t_558) {
  let t_559;
  const start_560 = t_558.location();
  t_558.advance();
  const name_561 = readName_499(t_558);
  t_558.addToken(TokenType.AttrName, ":" + name_561, start_560);
  skipWhitespace_509(t_558);
  if (t_558.peek() === Chars_337.EQUALS) {
    t_558.advance();
    t_559 = t_558.location();
    t_558.addToken(TokenType.AttrEquals, "=", t_559);
    skipWhitespace_509(t_558);
    tokenizeAttributeValue_538(t_558);
  }
  return;
}
/** @param {Tokenizer} t_563 */
function tokenizeAttributes_562(t_563) {
  let t_564;
  let t_565;
  let t_566;
  while (true) {
    if (! ! t_563.isDone()) {
      break;
    }
    skipWhitespace_509(t_563);
    const c_567 = t_563.peek();
    if (c_567 === Chars_337.GT) {
      t_566 = true;
    } else {
      if (c_567 === Chars_337.SLASH) {
        t_565 = true;
      } else {
        t_565 = c_567 == null;
      }
      t_566 = t_565;
    }
    if (t_566) {
      break;
    }
    if (c_567 === Chars_337.LBRACE) {
      tokenizeSpreadAttribute_536(t_563);
      continue;
    }
    if (c_567 === Chars_337.COLON) {
      tokenizeSpecialAttribute_557(t_563);
      continue;
    }
    const start_568 = t_563.location();
    const name_569 = readName_499(t_563);
    if (! name_569) {
      t_563.error("Expected attribute name");
      t_563.advance();
      continue;
    }
    t_563.addToken(TokenType.AttrName, name_569, start_568);
    skipWhitespace_509(t_563);
    if (t_563.peek() === Chars_337.EQUALS) {
      t_563.advance();
      t_564 = t_563.location();
      t_563.addToken(TokenType.AttrEquals, "=", t_564);
      skipWhitespace_509(t_563);
      tokenizeAttributeValue_538(t_563);
    }
  }
  return;
}
/**
 * @param {Tokenizer} t_571
 * @param {Location} start_572
 */
function tokenizeSlotOpen_570(t_571, start_572) {
  let t_573;
  let t_574;
  const name_575 = readName_499(t_571);
  t_571.addToken(TokenType.SlotOpen, name_575, start_572);
  tokenizeAttributes_562(t_571);
  skipWhitespace_509(t_571);
  if (t_571.matches("/\u003e")) {
    t_571.advanceBy(2);
    t_573 = t_571.location();
    t_571.addToken(TokenType.TagSelfClose, "/\u003e", t_573);
  } else if (t_571.peek() === Chars_337.GT) {
    t_571.advance();
    t_574 = t_571.location();
    t_571.addToken(TokenType.TagEnd, "\u003e", t_574);
  }
  return;
}
/**
 * @param {Tokenizer} t_577
 * @param {Location} start_578
 * @param {boolean} isLocal_579
 */
function tokenizeComponentOpen_576(t_577, start_578, isLocal_579) {
  let t_580;
  let t_581;
  const name_582 = readName_499(t_577);
  let fullName_583;
  if (isLocal_579) {
    fullName_583 = "." + name_582;
  } else {
    fullName_583 = name_582;
  }
  t_577.addToken(TokenType.ComponentOpen, fullName_583, start_578);
  tokenizeAttributes_562(t_577);
  skipWhitespace_509(t_577);
  if (t_577.matches("/\u003e")) {
    t_577.advanceBy(2);
    t_580 = t_577.location();
    t_577.addToken(TokenType.TagSelfClose, "/\u003e", t_580);
  } else if (t_577.peek() === Chars_337.GT) {
    t_577.advance();
    t_581 = t_577.location();
    t_577.addToken(TokenType.TagEnd, "\u003e", t_581);
  }
  return;
}
/** @param {Tokenizer} t_585 */
function tokenizeTag_584(t_585) {
  let return_586;
  let t_587;
  let t_588;
  fn_589: {
    const start_590 = t_585.location();
    t_585.advance();
    const c_591 = t_585.peek();
    if (c_591 === Chars_337.SLASH) {
      t_585.advance();
      tokenizeClosingTag_514(t_585, start_590);
      return_586 = void 0;
      break fn_589;
    }
    if (c_591 === Chars_337.COLON) {
      t_585.advance();
      tokenizeSlotOpen_570(t_585, start_590);
      return_586 = void 0;
      break fn_589;
    }
    if (c_591 === Chars_337.DOT) {
      t_585.advance();
      tokenizeComponentOpen_576(t_585, start_590, true);
      return_586 = void 0;
      break fn_589;
    }
    const name_592 = readName_499(t_585);
    if (! name_592) {
      t_585.error("Expected tag name after \u003c");
      return_586 = void 0;
      break fn_589;
    }
    if (isRemoteComponent(name_592)) {
      t_585.addToken(TokenType.ComponentOpen, name_592, start_590);
    } else {
      t_585.addToken(TokenType.TagOpen, name_592, start_590);
    }
    tokenizeAttributes_562(t_585);
    skipWhitespace_509(t_585);
    if (t_585.matches("/\u003e")) {
      t_585.advanceBy(2);
      t_587 = t_585.location();
      t_585.addToken(TokenType.TagSelfClose, "/\u003e", t_587);
    } else if (t_585.peek() === Chars_337.GT) {
      t_585.advance();
      t_588 = t_585.location();
      t_585.addToken(TokenType.TagEnd, "\u003e", t_588);
    } else {
      t_585.error("Expected \u003e or /\u003e to close tag");
    }
    return_586 = void 0;
  }
  return return_586;
}
/** @param {Tokenizer} t_594 */
function tokenizeText_593(t_594) {
  let t_595;
  const start_596 = t_594.location();
  const startPos_597 = t_594.pos;
  while (true) {
    if (! ! t_594.isDone()) {
      break;
    }
    const c_598 = t_594.peek();
    if (c_598 === Chars_337.LT) {
      t_595 = true;
    } else {
      t_595 = c_598 === Chars_337.LBRACE;
    }
    if (t_595) {
      break;
    }
    t_594.advance();
  }
  const value_599 = t_594.sliceFrom(startPos_597);
  if (! ! value_599) {
    t_594.addToken(TokenType.Text, value_599, start_596);
  }
  return;
}
/** @param {Tokenizer} t_601 */
function tokenizeNext_600(t_601) {
  let return_602;
  fn_603: {
    const c_604 = t_601.peek();
    if (c_604 == null) {
      return_602 = void 0;
      break fn_603;
    }
    if (t_601.matches("\u003c%")) {
      tokenizeEEx_470(t_601);
      return_602 = void 0;
      break fn_603;
    }
    if (t_601.matches("\u003c!--")) {
      tokenizeComment_480(t_601);
      return_602 = void 0;
      break fn_603;
    }
    if (c_604 === Chars_337.LT) {
      tokenizeTag_584(t_601);
      return_602 = void 0;
      break fn_603;
    }
    if (c_604 === Chars_337.LBRACE) {
      tokenizeExpression_523(t_601);
      return_602 = void 0;
      break fn_603;
    }
    tokenizeText_593(t_601);
    return_602 = void 0;
  }
  return return_602;
}
/** @param {Tokenizer} t_606 */
function tokenizeAll_605(t_606) {
  while (true) {
    if (! ! t_606.isDone()) {
      break;
    }
    tokenizeNext_600(t_606);
  }
  let t_607 = t_606.location();
  t_606.addToken(TokenType.EOF, "", t_607);
  return;
}
/**
 * @param {string} input_608
 * @returns {Array<Token>}
 */
export function tokenize(input_608) {
  const t_609 = new Tokenizer(input_608);
  tokenizeAll_605(t_609);
  if (! ! t_609.errors.length) {
    throw Error();
  }
  return listBuilderToList_247(t_609.tokens);
};
/**
 * @param {Parser} p_610
 * @param {string} tagName_611
 * @returns {boolean}
 */
function isClosingTag_244(p_610, tagName_611) {
  let return_612;
  let t_613;
  let t_614;
  let t_615;
  if (p_610.check(TokenType.TagClose)) {
    t_613 = p_610.current().value;
    return_612 = t_613 === tagName_611;
  } else if (p_610.check(TokenType.ComponentClose)) {
    t_614 = p_610.current().value;
    return_612 = t_614 === tagName_611;
  } else if (p_610.check(TokenType.SlotClose)) {
    t_615 = p_610.current().value;
    return_612 = t_615 === tagName_611;
  } else {
    return_612 = false;
  }
  return return_612;
}
/**
 * @param {Parser} p_616
 * @returns {Node}
 */
function parseText_252(p_616) {
  const tok_617 = p_616.advance();
  return new Text(tok_617.value, tok_617.span);
}
/**
 * @param {Parser} p_618
 * @returns {Node}
 */
function parseExpression_256(p_618) {
  let t_619;
  const startTok_620 = p_618.advance();
  let code_621 = "";
  if (p_618.check(TokenType.ExprContent)) {
    t_619 = p_618.advance().value;
    code_621 = t_619;
  }
  p_618.expect(TokenType.ExprClose);
  let t_622 = startTok_620.span;
  return new Expression(code_621, t_622);
}
/**
 * @param {string} s_624
 * @param {string} prefix_625
 * @returns {boolean}
 */
function stringStartsWith_623(s_624, prefix_625) {
  let return_626;
  let t_627;
  let t_628;
  fn_629: {
    let si_630 = 0;
    let pi_631 = 0;
    while (true) {
      if (!(prefix_625.length > pi_631)) {
        break;
      }
      if (!(s_624.length > si_630)) {
        return_626 = false;
        break fn_629;
      }
      if (stringGet_374(s_624, si_630) !== stringGet_374(prefix_625, pi_631)) {
        return_626 = false;
        break fn_629;
      }
      t_627 = stringNext_382(s_624, si_630);
      si_630 = t_627;
      t_628 = stringNext_382(prefix_625, pi_631);
      pi_631 = t_628;
    }
    return_626 = true;
  }
  return return_626;
}
/**
 * @param {string} s_633
 * @param {number} n_634
 * @returns {string}
 */
function stringSliceFromOffset_632(s_633, n_634) {
  let t_635;
  let idx_636 = 0;
  let i_637 = 0;
  while (i_637 < n_634) {
    if (s_633.length > idx_636) {
      t_635 = stringNext_382(s_633, idx_636);
      idx_636 = t_635;
    }
    i_637 = i_637 + 1 | 0;
  }
  let t_638 = s_633.length;
  return s_633.substring(idx_636, t_638);
}
/**
 * @param {Parser} p_640
 * @returns {Array<Attribute>}
 */
function parseAttributes_639(p_640) {
  let t_641;
  let t_642;
  let t_643;
  let t_644;
  const attrs_645 = [];
  while (true) {
    if (! ! p_640.isDone()) {
      break;
    }
    if (p_640.check(TokenType.TagEnd)) {
      t_642 = true;
    } else {
      t_641 = p_640.check(TokenType.TagSelfClose);
      t_642 = t_641;
    }
    if (t_642) {
      break;
    }
    if (p_640.check(TokenType.ExprOpen)) {
      t_643 = requireInstanceOf__287(parseExpression_256(p_640), Expression);
      const expr_646 = t_643;
      listBuilderAdd_228(attrs_645, new SpreadAttribute(expr_646, expr_646.span));
      continue;
    }
    if (p_640.check(TokenType.AttrName)) {
      const nameTok_647 = p_640.advance();
      const name_648 = nameTok_647.value;
      const isSpecial_649 = stringStartsWith_623(name_648, ":");
      if (p_640.check(TokenType.AttrEquals)) {
        p_640.advance();
        if (p_640.check(TokenType.ExprOpen)) {
          t_644 = requireInstanceOf__287(parseExpression_256(p_640), Expression);
          const expr_650 = t_644;
          if (isSpecial_649) {
            const kindName_651 = stringSliceFromOffset_632(name_648, 1);
            listBuilderAdd_228(attrs_645, new SpecialAttribute(kindName_651, expr_650, nameTok_647.span));
          } else {
            listBuilderAdd_228(attrs_645, new DynamicAttribute(name_648, expr_650, nameTok_647.span));
          }
        } else if (p_640.check(TokenType.AttrValue)) {
          const valTok_652 = p_640.advance();
          listBuilderAdd_228(attrs_645, new StaticAttribute(name_648, valTok_652.value, nameTok_647.span));
        } else {
          p_640.error("Expected attribute value");
        }
      } else {
        listBuilderAdd_228(attrs_645, new StaticAttribute(name_648, "true", nameTok_647.span));
      }
    } else {
      break;
    }
  }
  return listBuilderToList_247(attrs_645);
}
/**
 * @param {Parser} p_653
 * @returns {Node}
 */
function parseElement_253(p_653) {
  let return_654;
  let t_655;
  let t_656;
  let t_657;
  let t_658;
  let t_659;
  let t_660;
  fn_661: {
    const startTok_662 = p_653.advance();
    const tagName_663 = startTok_662.value;
    let attrs_664;
    attrs_664 = parseAttributes_639(p_653);
    if (p_653.check(TokenType.TagSelfClose)) {
      p_653.advance();
      t_659 = Object.freeze([]);
      t_655 = startTok_662.span;
      return_654 = new Element(tagName_663, attrs_664, t_659, true, t_655);
      break fn_661;
    }
    p_653.expect(TokenType.TagEnd);
    if (isVoidElement(tagName_663)) {
      t_660 = Object.freeze([]);
      t_656 = startTok_662.span;
      return_654 = new Element(tagName_663, attrs_664, t_660, true, t_656);
      break fn_661;
    }
    let children_665;
    children_665 = parseChildren_236(p_653, tagName_663);
    if (p_653.check(TokenType.TagClose)) {
      const closeTok_666 = p_653.advance();
      if (closeTok_666.value !== tagName_663) {
        t_657 = closeTok_666.value;
        p_653.error("Mismatched closing tag: expected \u003c/" + tagName_663 + "\u003e, got \u003c/" + t_657 + "\u003e");
      }
    } else {
      p_653.error("Expected closing tag \u003c/" + tagName_663 + "\u003e");
    }
    t_658 = startTok_662.span;
    return_654 = new Element(tagName_663, attrs_664, children_665, false, t_658);
  }
  return return_654;
}
/**
 * @param {Parser} p_667
 * @returns {Node}
 */
function parseSlot_255(p_667) {
  let return_668;
  let t_669;
  let t_670;
  let t_671;
  let t_672;
  fn_673: {
    const startTok_674 = p_667.advance();
    const name_675 = startTok_674.value;
    let attrs_676;
    attrs_676 = parseAttributes_639(p_667);
    let letBinding_677 = null;
    function fn_678(attr_679) {
      let t_680;
      let t_681;
      if (attr_679 instanceof SpecialAttribute) {
        t_681 = requireInstanceOf__287(attr_679, SpecialAttribute);
        if (t_681.kind === "let") {
          t_680 = t_681.expression;
          letBinding_677 = t_680.code;
        }
      }
      return;
    }
    attrs_676.forEach(fn_678);
    if (p_667.check(TokenType.TagSelfClose)) {
      p_667.advance();
      t_672 = Object.freeze([]);
      t_669 = startTok_674.span;
      return_668 = new Slot(name_675, attrs_676, t_672, letBinding_677, t_669);
      break fn_673;
    }
    p_667.expect(TokenType.TagEnd);
    let children_682;
    children_682 = parseChildren_236(p_667, null);
    if (p_667.check(TokenType.SlotClose)) {
      const closeTok_683 = p_667.advance();
      if (closeTok_683.value !== name_675) {
        t_670 = closeTok_683.value;
        p_667.error("Mismatched slot close: expected \u003c/:" + name_675 + "\u003e, got \u003c/:" + t_670 + "\u003e");
      }
    } else {
      p_667.error("Expected closing tag for slot " + name_675);
    }
    t_671 = startTok_674.span;
    return_668 = new Slot(name_675, attrs_676, children_682, letBinding_677, t_671);
  }
  return return_668;
}
/**
 * @param {Parser} p_685
 * @param {string} componentName_686
 * @returns {ComponentBodyResult_259}
 */
function parseComponentBody_684(p_685, componentName_686) {
  let t_687;
  let t_688;
  let t_689;
  const children_690 = [];
  const slots_691 = [];
  while (true) {
    if (! ! p_685.isDone()) {
      break;
    }
    if (p_685.check(TokenType.ComponentClose)) {
      break;
    }
    if (p_685.check(TokenType.SlotOpen)) {
      t_687 = parseSlot_255(p_685);
      t_688 = requireInstanceOf__287(t_687, Slot);
      listBuilderAdd_228(slots_691, t_688);
      continue;
    }
    t_689 = parseNode_245(p_685);
    const node_692 = t_689;
    if (!(node_692 == null)) {
      listBuilderAdd_228(children_690, node_692);
    }
  }
  return new ComponentBodyResult_259(listBuilderToList_247(children_690), listBuilderToList_247(slots_691));
}
/**
 * @param {Parser} p_693
 * @returns {Node}
 */
function parseComponent_254(p_693) {
  let return_694;
  let t_695;
  let t_696;
  let t_697;
  let t_698;
  let t_699;
  let t_700;
  fn_701: {
    const startTok_702 = p_693.advance();
    const name_703 = startTok_702.value;
    let compType_704;
    if (stringStartsWith_623(name_703, ".")) {
      compType_704 = ComponentType.Local;
    } else {
      compType_704 = ComponentType.Remote;
    }
    let attrs_705;
    attrs_705 = parseAttributes_639(p_693);
    if (p_693.check(TokenType.TagSelfClose)) {
      p_693.advance();
      t_698 = Object.freeze([]);
      t_699 = Object.freeze([]);
      t_695 = startTok_702.span;
      return_694 = new Component(compType_704, name_703, attrs_705, t_698, t_699, t_695);
      break fn_701;
    }
    p_693.expect(TokenType.TagEnd);
    t_700 = parseComponentBody_684(p_693, name_703);
    const children_706 = t_700.children;
    const slots_707 = t_700.slots;
    if (p_693.check(TokenType.ComponentClose)) {
      const closeTok_708 = p_693.advance();
      if (closeTok_708.value !== name_703) {
        t_696 = closeTok_708.value;
        p_693.error("Mismatched component close: expected \u003c/" + name_703 + "\u003e, got \u003c/" + t_696 + "\u003e");
      }
    } else {
      p_693.error("Expected closing tag for component " + name_703);
    }
    t_697 = startTok_702.span;
    return_694 = new Component(compType_704, name_703, attrs_705, children_706, slots_707, t_697);
  }
  return return_694;
}
/**
 * @param {string} s_710
 * @returns {string}
 */
function stringTrim_709(s_710) {
  let return_711;
  let t_712;
  let t_713;
  let startIdx_714 = 0;
  let t_715 = s_710.length;
  let endIdx_716 = t_715;
  while (true) {
    if (!(s_710.length > startIdx_714)) {
      break;
    }
    const c_717 = stringGet_374(s_710, startIdx_714);
    if (! isWhitespace(c_717)) {
      break;
    }
    t_712 = stringNext_382(s_710, startIdx_714);
    startIdx_714 = t_712;
  }
  while (true) {
    t_713 = stringPrev_467(s_710, endIdx_716);
    if (!(s_710.length > t_713)) {
      break;
    }
    const prevIdx_718 = stringPrev_467(s_710, endIdx_716);
    if (!(s_710.length > prevIdx_718)) {
      break;
    }
    const c_719 = stringGet_374(s_710, prevIdx_718);
    if (! isWhitespace(c_719)) {
      break;
    }
    endIdx_716 = prevIdx_718;
  }
  if (!(s_710.length > startIdx_714)) {
    return_711 = "";
  } else {
    return_711 = s_710.substring(startIdx_714, endIdx_716);
  }
  return return_711;
}
/**
 * @param {string} code_721
 * @returns {boolean}
 */
function isBlockStart_720(code_721) {
  let return_722;
  const trimmed_723 = stringTrim_709(code_721);
  if (stringStartsWith_623(trimmed_723, "if ")) {
    return_722 = true;
  } else if (stringStartsWith_623(trimmed_723, "case ")) {
    return_722 = true;
  } else if (stringStartsWith_623(trimmed_723, "cond ")) {
    return_722 = true;
  } else if (stringStartsWith_623(trimmed_723, "for ")) {
    return_722 = true;
  } else {
    return_722 = stringStartsWith_623(trimmed_723, "unless ");
  }
  return return_722;
}
/**
 * @param {string} s_725
 * @returns {Array<string>}
 */
function splitFirstWord_724(s_725) {
  let return_726;
  let t_727;
  let t_728;
  fn_729: {
    const trimmed_730 = stringTrim_709(s_725);
    let idx_731 = 0;
    while (true) {
      if (!(trimmed_730.length > idx_731)) {
        break;
      }
      if (stringGet_374(trimmed_730, idx_731) === Chars_337.SPACE) {
        const first_732 = trimmed_730.substring(0, idx_731);
        t_727 = trimmed_730.substring(stringNext_382(trimmed_730, idx_731), trimmed_730.length);
        const rest_733 = stringTrim_709(t_727);
        return_726 = Object.freeze([first_732, rest_733]);
        break fn_729;
      }
      t_728 = stringNext_382(trimmed_730, idx_731);
      idx_731 = t_728;
    }
    return_726 = Object.freeze([trimmed_730]);
  }
  return return_726;
}
/**
 * @param {string} s_735
 * @param {string} suffix_736
 * @returns {boolean}
 */
function stringEndsWith_734(s_735, suffix_736) {
  let return_737;
  let t_738;
  let t_739;
  let t_740;
  let t_741;
  let t_742;
  let t_743;
  fn_744: {
    t_738 = s_735.length;
    let si_745 = t_738;
    t_739 = suffix_736.length;
    let sui_746 = t_739;
    while (true) {
      t_740 = stringPrev_467(suffix_736, sui_746);
      if (!(suffix_736.length > t_740)) {
        break;
      }
      t_741 = stringPrev_467(suffix_736, sui_746);
      sui_746 = t_741;
      t_742 = stringPrev_467(s_735, si_745);
      if (!(s_735.length > t_742)) {
        return_737 = false;
        break fn_744;
      }
      t_743 = stringPrev_467(s_735, si_745);
      si_745 = t_743;
      if (stringGet_374(s_735, si_745) !== stringGet_374(suffix_736, sui_746)) {
        return_737 = false;
        break fn_744;
      }
    }
    return_737 = true;
  }
  return return_737;
}
/**
 * @param {string} s_748
 * @param {number} n_749
 * @returns {string}
 */
function stringDropLast_747(s_748, n_749) {
  let t_750;
  let t_751;
  let t_752 = s_748.length;
  let endIdx_753 = t_752;
  let i_754 = 0;
  while (i_754 < n_749) {
    t_750 = stringPrev_467(s_748, endIdx_753);
    if (s_748.length > t_750) {
      t_751 = stringPrev_467(s_748, endIdx_753);
      endIdx_753 = t_751;
    }
    i_754 = i_754 + 1 | 0;
  }
  return s_748.substring(0, endIdx_753);
}
/**
 * @param {string} s_756
 * @param {string} sub_757
 * @returns {boolean}
 */
function stringContains_755(s_756, sub_757) {
  let return_758;
  let t_759;
  let t_760;
  let t_761;
  let t_762;
  let t_763;
  let t_764;
  fn_765: {
    if (! sub_757) {
      return_758 = true;
      break fn_765;
    }
    let si_766 = 0;
    while (true) {
      if (!(s_756.length > si_766)) {
        break;
      }
      let sj_767 = si_766;
      let subj_768 = 0;
      let matched_769 = true;
      while (true) {
        if (!(sub_757.length > subj_768)) {
          break;
        }
        if (!(s_756.length > sj_767)) {
          t_764 = true;
        } else {
          t_759 = stringGet_374(s_756, sj_767);
          t_760 = stringGet_374(sub_757, subj_768);
          t_764 = t_759 !== t_760;
        }
        if (t_764) {
          matched_769 = false;
          break;
        }
        t_761 = stringNext_382(s_756, sj_767);
        sj_767 = t_761;
        t_762 = stringNext_382(sub_757, subj_768);
        subj_768 = t_762;
      }
      if (matched_769) {
        return_758 = true;
        break fn_765;
      }
      t_763 = stringNext_382(s_756, si_766);
      si_766 = t_763;
    }
    return_758 = false;
  }
  return return_758;
}
/**
 * @param {Parser} p_771
 * @returns {boolean}
 */
function isBlockClause_770(p_771) {
  let return_772;
  let t_773;
  fn_774: {
    if ((p_771.pos + 1 | 0) < p_771.tokens.length) {
      const nextTok_775 = listedGet_209(p_771.tokens, p_771.pos + 1 | 0);
      if (nextTok_775.tokenType.kind === "eex_content") {
        t_773 = nextTok_775.value;
        const code_776 = stringTrim_709(t_773);
        if (code_776 === "end") {
          return_772 = true;
        } else if (code_776 === "else") {
          return_772 = true;
        } else {
          return_772 = stringContains_755(code_776, "-\u003e");
        }
        break fn_774;
      }
    }
    return_772 = false;
  }
  return return_772;
}
/**
 * @param {Parser} p_778
 * @param {string} blockType_779
 * @returns {Array<Node>}
 */
function parseEExBlockBody_777(p_778, blockType_779) {
  let t_780;
  let t_781;
  let t_782;
  const children_783 = [];
  while (true) {
    if (! ! p_778.isDone()) {
      break;
    }
    if (p_778.check(TokenType.EExOpen)) {
      t_781 = true;
    } else {
      t_780 = p_778.check(TokenType.EExOutput);
      t_781 = t_780;
    }
    if (t_781) {
      if (isBlockClause_770(p_778)) {
        break;
      }
    }
    t_782 = parseNode_245(p_778);
    const node_784 = t_782;
    if (!(node_784 == null)) {
      listBuilderAdd_228(children_783, node_784);
    }
  }
  return listBuilderToList_247(children_783);
}
/**
 * @param {Parser} p_786
 * @param {string} startCode_787
 * @param {Span | null} span_788
 * @returns {Node}
 */
function parseEExBlock_785(p_786, startCode_787, span_788) {
  let t_789;
  let t_790;
  let t_791;
  let t_792;
  let t_793;
  let t_794;
  let t_795;
  let t_796;
  let t_797;
  let t_798 = stringTrim_709(startCode_787);
  const parts_799 = splitFirstWord_724(t_798);
  const blockType_800 = listedGet_209(parts_799, 0);
  if (parts_799.length > 1) {
    t_789 = listedGet_209(parts_799, 1);
    t_794 = t_789;
  } else {
    t_794 = "";
  }
  let expression_801 = t_794;
  if (stringEndsWith_734(expression_801, " do")) {
    t_790 = stringDropLast_747(expression_801, 3);
    expression_801 = t_790;
  }
  const clauses_802 = [];
  let doChildren_803;
  doChildren_803 = parseEExBlockBody_777(p_786, blockType_800);
  listBuilderAdd_228(clauses_802, new EExClause("do", null, doChildren_803, span_788));
  while (true) {
    if (! ! p_786.isDone()) {
      break;
    }
    if (p_786.check(TokenType.EExOpen)) {
      t_795 = true;
    } else {
      t_791 = p_786.check(TokenType.EExOutput);
      t_795 = t_791;
    }
    if (t_795) {
      const tok_804 = p_786.current();
      if (isBlockClause_770(p_786)) {
        p_786.advance();
        let clauseCode_805 = "";
        if (p_786.check(TokenType.EExContent)) {
          t_792 = p_786.advance().value;
          t_793 = stringTrim_709(t_792);
          clauseCode_805 = t_793;
        }
        p_786.expect(TokenType.EExClose);
        if (clauseCode_805 === "end") {
          listBuilderAdd_228(clauses_802, new EExClause("end", null, Object.freeze([]), span_788));
          break;
        } else if (clauseCode_805 === "else") {
          t_796 = parseEExBlockBody_777(p_786, blockType_800);
          const elseChildren_806 = t_796;
          listBuilderAdd_228(clauses_802, new EExClause("else", null, elseChildren_806, span_788));
        } else {
          t_797 = parseEExBlockBody_777(p_786, blockType_800);
          const clauseChildren_807 = t_797;
          listBuilderAdd_228(clauses_802, new EExClause("-\u003e", clauseCode_805, clauseChildren_807, span_788));
        }
      } else {
        break;
      }
    } else {
      break;
    }
  }
  let t_808 = listBuilderToList_247(clauses_802);
  return new EExBlock(blockType_800, expression_801, t_808, span_788);
}
/**
 * @param {Parser} p_809
 * @param {EExType} eexType_810
 * @returns {Node}
 */
function parseEEx_257(p_809, eexType_810) {
  let return_811;
  let t_812;
  let t_813;
  let t_814;
  fn_815: {
    const startTok_816 = p_809.advance();
    let code_817 = "";
    if (p_809.check(TokenType.EExContent)) {
      t_812 = p_809.advance().value;
      code_817 = t_812;
    }
    p_809.expect(TokenType.EExClose);
    if (isBlockStart_720(code_817)) {
      t_813 = startTok_816.span;
      return_811 = parseEExBlock_785(p_809, code_817, t_813);
      break fn_815;
    }
    t_814 = startTok_816.span;
    return_811 = new EEx(eexType_810, code_817, t_814);
  }
  return return_811;
}
/**
 * @param {Parser} p_818
 * @returns {Node}
 */
function parseComment_258(p_818) {
  let t_819;
  const startTok_820 = p_818.advance();
  let content_821 = "";
  if (p_818.check(TokenType.CommentContent)) {
    t_819 = p_818.advance().value;
    content_821 = t_819;
  }
  p_818.expect(TokenType.CommentClose);
  let t_822 = startTok_820.span;
  return new Comment(content_821, t_822);
}
/**
 * @param {Array<Token>} tokenList_823
 * @returns {Document}
 */
export function parseTokens(tokenList_823) {
  const p_824 = new Parser(tokenList_823);
  let children_825;
  children_825 = parseChildren_236(p_824, null);
  if (! ! p_824.errors.length) {
    throw Error();
  }
  return new Document(children_825, null);
};
/**
 * @param {string} input_826
 * @returns {Document}
 */
export function parse(input_826) {
  let tokenList_827;
  tokenList_827 = tokenize(input_826);
  return parseTokens(tokenList_827);
};
/**
 * @param {string} input_828
 * @returns {Document}
 */
export function parseTemplate(input_828) {
  return parse(input_828);
};
/**
 * @param {string} input_829
 * @returns {Array<Token>}
 */
export function tokenizeTemplate(input_829) {
  return tokenize(input_829);
};
/**
 * @param {string} s_830
 * @returns {string}
 */
function escapeHtml_288(s_830) {
  let t_831;
  const out_832 = [""];
  let idx_833 = 0;
  while (true) {
    if (!(s_830.length > idx_833)) {
      break;
    }
    const c_834 = stringGet_374(s_830, idx_833);
    if (c_834 === RenderChars_266.AMP) {
      out_832[0] += "\u0026amp;";
    } else if (c_834 === RenderChars_266.LT) {
      out_832[0] += "\u0026lt;";
    } else if (c_834 === RenderChars_266.GT) {
      out_832[0] += "\u0026gt;";
    } else {
      try {
        stringBuilderAppendCodePoint_835(out_832, c_834);
      } catch {
      }
    }
    t_831 = stringNext_382(s_830, idx_833);
    idx_833 = t_831;
  }
  return out_832[0];
}
/**
 * @param {string} s_837
 * @returns {string}
 */
function escapeAttr_836(s_837) {
  let t_838;
  const out_839 = [""];
  let idx_840 = 0;
  while (true) {
    if (!(s_837.length > idx_840)) {
      break;
    }
    const c_841 = stringGet_374(s_837, idx_840);
    if (c_841 === RenderChars_266.AMP) {
      out_839[0] += "\u0026amp;";
    } else if (c_841 === RenderChars_266.DQUOTE) {
      out_839[0] += "\u0026quot;";
    } else if (c_841 === RenderChars_266.LT) {
      out_839[0] += "\u0026lt;";
    } else if (c_841 === RenderChars_266.GT) {
      out_839[0] += "\u0026gt;";
    } else {
      try {
        stringBuilderAppendCodePoint_835(out_839, c_841);
      } catch {
      }
    }
    t_838 = stringNext_382(s_837, idx_840);
    idx_840 = t_838;
  }
  return out_839[0];
}
/**
 * @param {Array<Attribute>} attrs_843
 * @param {globalThis.Array<string>} out_844
 */
function renderAttributes_842(attrs_843, out_844) {
  function fn_845(attr_846) {
    let t_847;
    let t_848;
    let t_849;
    let t_850;
    let t_851;
    let t_852;
    let t_853;
    let t_854;
    let t_855;
    let t_856;
    let t_857;
    let t_858;
    out_844[0] += " ";
    if (attr_846 instanceof StaticAttribute) {
      t_855 = requireInstanceOf__287(attr_846, StaticAttribute);
      t_847 = t_855.name;
      out_844[0] += t_847;
      out_844[0] += "=\u0022";
      t_848 = t_855.value;
      t_849 = escapeAttr_836(t_848);
      out_844[0] += t_849;
      out_844[0] += "\u0022";
    } else if (attr_846 instanceof DynamicAttribute) {
      t_856 = requireInstanceOf__287(attr_846, DynamicAttribute);
      t_850 = t_856.name;
      out_844[0] += t_850;
      out_844[0] += "={";
      t_851 = t_856.expression.code;
      out_844[0] += t_851;
      out_844[0] += "}";
    } else if (attr_846 instanceof SpreadAttribute) {
      t_857 = requireInstanceOf__287(attr_846, SpreadAttribute);
      out_844[0] += "{";
      t_852 = t_857.expression.code;
      out_844[0] += t_852;
      out_844[0] += "}";
    } else if (attr_846 instanceof SpecialAttribute) {
      t_858 = requireInstanceOf__287(attr_846, SpecialAttribute);
      out_844[0] += ":";
      t_853 = t_858.kind;
      out_844[0] += t_853;
      out_844[0] += "={";
      t_854 = t_858.expression.code;
      out_844[0] += t_854;
      out_844[0] += "}";
    }
    return;
  }
  attrs_843.forEach(fn_845);
  return;
}
/**
 * @param {Element} el_859
 * @param {globalThis.Array<string>} out_860
 */
function renderElement_289(el_859, out_860) {
  let return_861;
  let t_862;
  let t_863;
  let t_864;
  let t_865;
  let t_866;
  let t_867;
  fn_868: {
    out_860[0] += "\u003c";
    t_862 = el_859.tag;
    out_860[0] += t_862;
    t_863 = el_859.attributes;
    renderAttributes_842(t_863, out_860);
    if (el_859.selfClosing) {
      t_867 = true;
    } else {
      t_864 = isVoidElement(el_859.tag);
      t_867 = t_864;
    }
    if (t_867) {
      out_860[0] += " /\u003e";
      return_861 = void 0;
      break fn_868;
    }
    out_860[0] += "\u003e";
    t_865 = el_859.children;
    function fn_869(child_870) {
      renderNode_275(child_870, out_860);
      return;
    }
    t_865.forEach(fn_869);
    out_860[0] += "\u003c/";
    t_866 = el_859.tag;
    out_860[0] += t_866;
    out_860[0] += "\u003e";
    return_861 = void 0;
  }
  return return_861;
}
/**
 * @param {Slot} slot_871
 * @param {globalThis.Array<string>} out_872
 */
function renderSlot_291(slot_871, out_872) {
  let return_873;
  let t_874;
  let t_875;
  let t_876;
  let t_877;
  fn_878: {
    out_872[0] += "\u003c:";
    t_874 = slot_871.name;
    out_872[0] += t_874;
    t_875 = slot_871.attributes;
    renderAttributes_842(t_875, out_872);
    if (slot_871.children.length === 0) {
      out_872[0] += " /\u003e";
      return_873 = void 0;
      break fn_878;
    }
    out_872[0] += "\u003e";
    t_876 = slot_871.children;
    function fn_879(child_880) {
      renderNode_275(child_880, out_872);
      return;
    }
    t_876.forEach(fn_879);
    out_872[0] += "\u003c/:";
    t_877 = slot_871.name;
    out_872[0] += t_877;
    out_872[0] += "\u003e";
    return_873 = void 0;
  }
  return return_873;
}
/**
 * @param {Component} comp_881
 * @param {globalThis.Array<string>} out_882
 */
function renderComponent_290(comp_881, out_882) {
  let return_883;
  let t_884;
  let t_885;
  let t_886;
  let t_887;
  let t_888;
  let t_889;
  let t_890;
  fn_891: {
    out_882[0] += "\u003c";
    t_884 = comp_881.name;
    out_882[0] += t_884;
    t_885 = comp_881.attributes;
    renderAttributes_842(t_885, out_882);
    if (comp_881.children.length === 0) {
      t_886 = comp_881.slots.length;
      t_890 = t_886 === 0;
    } else {
      t_890 = false;
    }
    if (t_890) {
      out_882[0] += " /\u003e";
      return_883 = void 0;
      break fn_891;
    }
    out_882[0] += "\u003e";
    t_887 = comp_881.children;
    function fn_892(child_893) {
      renderNode_275(child_893, out_882);
      return;
    }
    t_887.forEach(fn_892);
    t_888 = comp_881.slots;
    function fn_894(slot_895) {
      renderSlot_291(slot_895, out_882);
      return;
    }
    t_888.forEach(fn_894);
    out_882[0] += "\u003c/";
    t_889 = comp_881.name;
    out_882[0] += t_889;
    out_882[0] += "\u003e";
    return_883 = void 0;
  }
  return return_883;
}
/**
 * @param {Expression} expr_896
 * @param {globalThis.Array<string>} out_897
 */
function renderExpression_292(expr_896, out_897) {
  out_897[0] += "{";
  let t_898 = expr_896.code;
  out_897[0] += t_898;
  out_897[0] += "}";
  return;
}
/**
 * @param {EEx} eex_899
 * @param {globalThis.Array<string>} out_900
 */
function renderEEx_293(eex_899, out_900) {
  let t_901;
  let t_902;
  let t_903;
  const kind_904 = eex_899.eexType.kind;
  if (kind_904 === "output") {
    out_900[0] += "\u003c%= ";
    t_901 = eex_899.code;
    out_900[0] += t_901;
    out_900[0] += " %\u003e";
  } else if (kind_904 === "comment") {
    out_900[0] += "\u003c%# ";
    t_902 = eex_899.code;
    out_900[0] += t_902;
    out_900[0] += " %\u003e";
  } else {
    out_900[0] += "\u003c% ";
    t_903 = eex_899.code;
    out_900[0] += t_903;
    out_900[0] += " %\u003e";
  }
  return;
}
/**
 * @param {EExBlock} block_905
 * @param {globalThis.Array<string>} out_906
 */
function renderEExBlock_294(block_905, out_906) {
  out_906[0] += "\u003c%= ";
  let t_907 = block_905.blockType;
  out_906[0] += t_907;
  out_906[0] += " ";
  let t_908 = block_905.expression;
  out_906[0] += t_908;
  out_906[0] += " do %\u003e";
  let t_909 = block_905.clauses;
  function fn_910(clause_911) {
    let t_912;
    let t_913;
    let t_914;
    let t_915;
    let t_916;
    const ctype_917 = clause_911.clauseType;
    if (ctype_917 === "do") {
      t_912 = clause_911.children;
      function fn_918(child_919) {
        renderNode_275(child_919, out_906);
        return;
      }
      t_912.forEach(fn_918);
    } else if (ctype_917 === "else") {
      out_906[0] += "\u003c% else %\u003e";
      t_913 = clause_911.children;
      function fn_920(child_921) {
        renderNode_275(child_921, out_906);
        return;
      }
      t_913.forEach(fn_920);
    } else if (ctype_917 === "end") {
      out_906[0] += "\u003c% end %\u003e";
    } else {
      out_906[0] += "\u003c% ";
      const expr_922 = clause_911.expression;
      if (!(expr_922 == null)) {
        t_914 = typeof expr_922 === "string";
      } else {
        t_914 = false;
      }
      if (t_914) {
        if (expr_922 == null) {
          t_916 = panic_507();
        } else {
          t_916 = expr_922;
        }
        out_906[0] += t_916;
      }
      out_906[0] += " %\u003e";
      t_915 = clause_911.children;
      function fn_923(child_924) {
        renderNode_275(child_924, out_906);
        return;
      }
      t_915.forEach(fn_923);
    }
    return;
  }
  t_909.forEach(fn_910);
  return;
}
/**
 * @param {Comment} comment_925
 * @param {globalThis.Array<string>} out_926
 */
function renderComment_295(comment_925, out_926) {
  out_926[0] += "\u003c!-- ";
  let t_927 = comment_925.content;
  out_926[0] += t_927;
  out_926[0] += " --\u003e";
  return;
}
/**
 * @param {Document} doc_928
 * @returns {string}
 */
export function renderHtml(doc_928) {
  const out_929 = [""];
  let t_930 = doc_928.children;
  function fn_931(child_932) {
    renderNode_275(child_932, out_929);
    return;
  }
  t_930.forEach(fn_931);
  return out_929[0];
};
/**
 * @param {Document} doc_933
 * @returns {string}
 */
export function renderToHtml(doc_933) {
  return renderHtml(doc_933);
};
/**
 * @param {string} s_935
 * @returns {string}
 */
function escapeNewlines_934(s_935) {
  let t_936;
  const out_937 = [""];
  let idx_938 = 0;
  while (true) {
    if (!(s_935.length > idx_938)) {
      break;
    }
    const c_939 = stringGet_374(s_935, idx_938);
    if (c_939 === RenderChars_266.NEWLINE) {
      out_937[0] += "\\n";
    } else if (c_939 === RenderChars_266.CR) {
      out_937[0] += "\\r";
    } else if (c_939 === RenderChars_266.TAB) {
      out_937[0] += "\\t";
    } else {
      try {
        stringBuilderAppendCodePoint_835(out_937, c_939);
      } catch {
      }
    }
    t_936 = stringNext_382(s_935, idx_938);
    idx_938 = t_936;
  }
  return out_937[0];
}
/**
 * @param {Attribute} attr_941
 * @param {globalThis.Array<string>} out_942
 * @param {string} indent_943
 */
function renderDebugAttr_940(attr_941, out_942, indent_943) {
  let t_944;
  let t_945;
  let t_946;
  let t_947;
  let t_948;
  let t_949;
  let t_950;
  let t_951;
  let t_952;
  let t_953;
  let t_954;
  out_942[0] += indent_943;
  out_942[0] += "Attr: ";
  if (attr_941 instanceof StaticAttribute) {
    t_951 = requireInstanceOf__287(attr_941, StaticAttribute);
    t_944 = t_951.name;
    out_942[0] += t_944;
    out_942[0] += "=\u0022";
    t_945 = t_951.value;
    out_942[0] += t_945;
    out_942[0] += "\u0022";
  } else if (attr_941 instanceof DynamicAttribute) {
    t_952 = requireInstanceOf__287(attr_941, DynamicAttribute);
    t_946 = t_952.name;
    out_942[0] += t_946;
    out_942[0] += "={";
    t_947 = t_952.expression.code;
    out_942[0] += t_947;
    out_942[0] += "}";
  } else if (attr_941 instanceof SpreadAttribute) {
    t_953 = requireInstanceOf__287(attr_941, SpreadAttribute);
    out_942[0] += "{";
    t_948 = t_953.expression.code;
    out_942[0] += t_948;
    out_942[0] += "}";
  } else if (attr_941 instanceof SpecialAttribute) {
    t_954 = requireInstanceOf__287(attr_941, SpecialAttribute);
    out_942[0] += ":";
    t_949 = t_954.kind;
    out_942[0] += t_949;
    out_942[0] += "={";
    t_950 = t_954.expression.code;
    out_942[0] += t_950;
    out_942[0] += "}";
  }
  out_942[0] += "\n";
  return;
}
/**
 * @param {Node} node_956
 * @param {globalThis.Array<string>} out_957
 * @param {string} indent_958
 */
function renderDebugNode_955(node_956, out_957, indent_958) {
  let t_959;
  let t_960;
  let t_961;
  let t_962;
  let t_963;
  let t_964;
  let t_965;
  let t_966;
  let t_967;
  let t_968;
  let t_969;
  let t_970;
  let t_971;
  let t_972;
  let t_973;
  let t_974;
  let t_975;
  let t_976;
  let t_977;
  let t_978;
  let t_979;
  let t_980;
  let t_981;
  let t_982;
  let t_983;
  let t_984;
  out_957[0] += indent_958;
  if (node_956 instanceof Text) {
    t_977 = requireInstanceOf__287(node_956, Text);
    out_957[0] += "Text: \u0022";
    t_959 = t_977.content;
    t_960 = escapeNewlines_934(t_959);
    out_957[0] += t_960;
    out_957[0] += "\u0022\n";
  } else if (node_956 instanceof Element) {
    t_978 = requireInstanceOf__287(node_956, Element);
    out_957[0] += "Element: \u003c";
    t_961 = t_978.tag;
    out_957[0] += t_961;
    out_957[0] += "\u003e\n";
    t_962 = t_978.attributes;
    function fn_985(attr_986) {
      renderDebugAttr_940(attr_986, out_957, String(indent_958) + "  ");
      return;
    }
    t_962.forEach(fn_985);
    t_963 = t_978.children;
    function fn_987(child_988) {
      renderDebugNode_955(child_988, out_957, String(indent_958) + "  ");
      return;
    }
    t_963.forEach(fn_987);
  } else if (node_956 instanceof Component) {
    t_979 = requireInstanceOf__287(node_956, Component);
    out_957[0] += "Component: ";
    t_964 = t_979.name;
    out_957[0] += t_964;
    out_957[0] += "\n";
    t_965 = t_979.attributes;
    function fn_989(attr_990) {
      renderDebugAttr_940(attr_990, out_957, String(indent_958) + "  ");
      return;
    }
    t_965.forEach(fn_989);
    t_966 = t_979.children;
    function fn_991(child_992) {
      renderDebugNode_955(child_992, out_957, String(indent_958) + "  ");
      return;
    }
    t_966.forEach(fn_991);
    t_967 = t_979.slots;
    function fn_993(slot_994) {
      renderDebugNode_955(slot_994, out_957, String(indent_958) + "  ");
      return;
    }
    t_967.forEach(fn_993);
  } else if (node_956 instanceof Slot) {
    t_980 = requireInstanceOf__287(node_956, Slot);
    out_957[0] += "Slot: \u003c:";
    t_968 = t_980.name;
    out_957[0] += t_968;
    out_957[0] += "\u003e\n";
    t_969 = t_980.children;
    function fn_995(child_996) {
      renderDebugNode_955(child_996, out_957, String(indent_958) + "  ");
      return;
    }
    t_969.forEach(fn_995);
  } else if (node_956 instanceof Expression) {
    t_981 = requireInstanceOf__287(node_956, Expression);
    out_957[0] += "Expression: {";
    t_970 = t_981.code;
    out_957[0] += t_970;
    out_957[0] += "}\n";
  } else if (node_956 instanceof EEx) {
    t_982 = requireInstanceOf__287(node_956, EEx);
    out_957[0] += "EEx: ";
    t_971 = t_982.eexType.kind;
    out_957[0] += t_971;
    out_957[0] += " \u0022";
    t_972 = t_982.code;
    out_957[0] += t_972;
    out_957[0] += "\u0022\n";
  } else if (node_956 instanceof EExBlock) {
    t_983 = requireInstanceOf__287(node_956, EExBlock);
    out_957[0] += "EExBlock: ";
    t_973 = t_983.blockType;
    out_957[0] += t_973;
    out_957[0] += " ";
    t_974 = t_983.expression;
    out_957[0] += t_974;
    out_957[0] += "\n";
    t_975 = t_983.clauses;
    function fn_997(clause_998) {
      out_957[0] += String(indent_958) + "  Clause: ";
      let t_999 = clause_998.clauseType;
      out_957[0] += t_999;
      out_957[0] += "\n";
      let t_1000 = clause_998.children;
      function fn_1001(child_1002) {
        renderDebugNode_955(child_1002, out_957, String(indent_958) + "    ");
        return;
      }
      t_1000.forEach(fn_1001);
      return;
    }
    t_975.forEach(fn_997);
  } else if (node_956 instanceof Comment) {
    t_984 = requireInstanceOf__287(node_956, Comment);
    out_957[0] += "Comment: ";
    t_976 = t_984.content;
    out_957[0] += t_976;
    out_957[0] += "\n";
  } else {
    out_957[0] += "Unknown node\n";
  }
  return;
}
/**
 * @param {Document} doc_1003
 * @returns {string}
 */
export function renderDebug(doc_1003) {
  const out_1004 = [""];
  out_1004[0] += "Document\n";
  let t_1005 = doc_1003.children;
  function fn_1006(child_1007) {
    renderDebugNode_955(child_1007, out_1004, "  ");
    return;
  }
  t_1005.forEach(fn_1006);
  return out_1004[0];
};
/**
 * @param {Document} doc_1008
 * @returns {string}
 */
export function renderToDebug(doc_1008) {
  return renderDebug(doc_1008);
};
/**
 * @param {string} s_1010
 * @param {globalThis.Array<string>} out_1011
 */
function jsonString_1009(s_1010, out_1011) {
  let t_1012;
  out_1011[0] += "\u0022";
  let idx_1013 = 0;
  while (true) {
    if (!(s_1010.length > idx_1013)) {
      break;
    }
    const c_1014 = stringGet_374(s_1010, idx_1013);
    if (c_1014 === RenderChars_266.DQUOTE) {
      out_1011[0] += "\\\u0022";
    } else if (c_1014 === RenderChars_266.BACKSLASH) {
      out_1011[0] += "\\\\";
    } else if (c_1014 === RenderChars_266.NEWLINE) {
      out_1011[0] += "\\n";
    } else if (c_1014 === RenderChars_266.CR) {
      out_1011[0] += "\\r";
    } else if (c_1014 === RenderChars_266.TAB) {
      out_1011[0] += "\\t";
    } else {
      try {
        stringBuilderAppendCodePoint_835(out_1011, c_1014);
      } catch {
      }
    }
    t_1012 = stringNext_382(s_1010, idx_1013);
    idx_1013 = t_1012;
  }
  out_1011[0] += "\u0022";
  return;
}
/**
 * @param {Attribute} attr_1016
 * @param {globalThis.Array<string>} out_1017
 */
function renderJsonAttr_1015(attr_1016, out_1017) {
  let t_1018;
  let t_1019;
  let t_1020;
  let t_1021;
  let t_1022;
  let t_1023;
  let t_1024;
  let t_1025;
  let t_1026;
  let t_1027;
  let t_1028;
  if (attr_1016 instanceof StaticAttribute) {
    t_1025 = requireInstanceOf__287(attr_1016, StaticAttribute);
    out_1017[0] += "{\u0022type\u0022:\u0022static\u0022,\u0022name\u0022:";
    t_1018 = t_1025.name;
    jsonString_1009(t_1018, out_1017);
    out_1017[0] += ",\u0022value\u0022:";
    t_1019 = t_1025.value;
    jsonString_1009(t_1019, out_1017);
    out_1017[0] += "}";
  } else if (attr_1016 instanceof DynamicAttribute) {
    t_1026 = requireInstanceOf__287(attr_1016, DynamicAttribute);
    out_1017[0] += "{\u0022type\u0022:\u0022dynamic\u0022,\u0022name\u0022:";
    t_1020 = t_1026.name;
    jsonString_1009(t_1020, out_1017);
    out_1017[0] += ",\u0022expression\u0022:";
    t_1021 = t_1026.expression.code;
    jsonString_1009(t_1021, out_1017);
    out_1017[0] += "}";
  } else if (attr_1016 instanceof SpreadAttribute) {
    t_1027 = requireInstanceOf__287(attr_1016, SpreadAttribute);
    out_1017[0] += "{\u0022type\u0022:\u0022spread\u0022,\u0022expression\u0022:";
    t_1022 = t_1027.expression.code;
    jsonString_1009(t_1022, out_1017);
    out_1017[0] += "}";
  } else if (attr_1016 instanceof SpecialAttribute) {
    t_1028 = requireInstanceOf__287(attr_1016, SpecialAttribute);
    out_1017[0] += "{\u0022type\u0022:\u0022special\u0022,\u0022kind\u0022:";
    t_1023 = t_1028.kind;
    jsonString_1009(t_1023, out_1017);
    out_1017[0] += ",\u0022expression\u0022:";
    t_1024 = t_1028.expression.code;
    jsonString_1009(t_1024, out_1017);
    out_1017[0] += "}";
  } else {
    out_1017[0] += "null";
  }
  return;
}
/**
 * @param {Node} node_1030
 * @param {globalThis.Array<string>} out_1031
 */
function renderJsonNode_1029(node_1030, out_1031) {
  let t_1032;
  let t_1033;
  let t_1034;
  let t_1035;
  let t_1036;
  let t_1037;
  let t_1038;
  let t_1039;
  let t_1040;
  let t_1041;
  let t_1042;
  let t_1043;
  let t_1044;
  let t_1045;
  let t_1046;
  let t_1047;
  let t_1048;
  let t_1049;
  let t_1050;
  let t_1051;
  let t_1052;
  let t_1053;
  if (node_1030 instanceof Text) {
    t_1047 = requireInstanceOf__287(node_1030, Text);
    out_1031[0] += "{\u0022type\u0022:\u0022text\u0022,\u0022content\u0022:";
    t_1032 = t_1047.content;
    jsonString_1009(t_1032, out_1031);
    out_1031[0] += "}";
  } else if (node_1030 instanceof Element) {
    t_1048 = requireInstanceOf__287(node_1030, Element);
    out_1031[0] += "{\u0022type\u0022:\u0022element\u0022,\u0022tag\u0022:";
    t_1033 = t_1048.tag;
    jsonString_1009(t_1033, out_1031);
    out_1031[0] += ",\u0022attributes\u0022:[";
    let first_1054 = true;
    t_1034 = t_1048.attributes;
    function fn_1055(attr_1056) {
      if (! first_1054) {
        out_1031[0] += ",";
      }
      first_1054 = false;
      renderJsonAttr_1015(attr_1056, out_1031);
      return;
    }
    t_1034.forEach(fn_1055);
    out_1031[0] += "],\u0022children\u0022:[";
    first_1054 = true;
    t_1035 = t_1048.children;
    function fn_1057(child_1058) {
      if (! first_1054) {
        out_1031[0] += ",";
      }
      first_1054 = false;
      renderJsonNode_1029(child_1058, out_1031);
      return;
    }
    t_1035.forEach(fn_1057);
    out_1031[0] += "]}";
  } else if (node_1030 instanceof Component) {
    t_1049 = requireInstanceOf__287(node_1030, Component);
    out_1031[0] += "{\u0022type\u0022:\u0022component\u0022,\u0022name\u0022:";
    t_1036 = t_1049.name;
    jsonString_1009(t_1036, out_1031);
    out_1031[0] += ",\u0022componentType\u0022:\u0022";
    t_1037 = t_1049.componentType.kind;
    out_1031[0] += t_1037;
    out_1031[0] += "\u0022,\u0022attributes\u0022:[";
    let first_1059 = true;
    t_1038 = t_1049.attributes;
    function fn_1060(attr_1061) {
      if (! first_1059) {
        out_1031[0] += ",";
      }
      first_1059 = false;
      renderJsonAttr_1015(attr_1061, out_1031);
      return;
    }
    t_1038.forEach(fn_1060);
    out_1031[0] += "],\u0022children\u0022:[";
    first_1059 = true;
    t_1039 = t_1049.children;
    function fn_1062(child_1063) {
      if (! first_1059) {
        out_1031[0] += ",";
      }
      first_1059 = false;
      renderJsonNode_1029(child_1063, out_1031);
      return;
    }
    t_1039.forEach(fn_1062);
    out_1031[0] += "],\u0022slots\u0022:[";
    first_1059 = true;
    t_1040 = t_1049.slots;
    function fn_1064(slot_1065) {
      if (! first_1059) {
        out_1031[0] += ",";
      }
      first_1059 = false;
      renderJsonNode_1029(slot_1065, out_1031);
      return;
    }
    t_1040.forEach(fn_1064);
    out_1031[0] += "]}";
  } else if (node_1030 instanceof Slot) {
    t_1050 = requireInstanceOf__287(node_1030, Slot);
    out_1031[0] += "{\u0022type\u0022:\u0022slot\u0022,\u0022name\u0022:";
    t_1041 = t_1050.name;
    jsonString_1009(t_1041, out_1031);
    out_1031[0] += ",\u0022children\u0022:[";
    let first_1066 = true;
    t_1042 = t_1050.children;
    function fn_1067(child_1068) {
      if (! first_1066) {
        out_1031[0] += ",";
      }
      first_1066 = false;
      renderJsonNode_1029(child_1068, out_1031);
      return;
    }
    t_1042.forEach(fn_1067);
    out_1031[0] += "]}";
  } else if (node_1030 instanceof Expression) {
    t_1051 = requireInstanceOf__287(node_1030, Expression);
    out_1031[0] += "{\u0022type\u0022:\u0022expression\u0022,\u0022code\u0022:";
    t_1043 = t_1051.code;
    jsonString_1009(t_1043, out_1031);
    out_1031[0] += "}";
  } else if (node_1030 instanceof EEx) {
    t_1052 = requireInstanceOf__287(node_1030, EEx);
    out_1031[0] += "{\u0022type\u0022:\u0022eex\u0022,\u0022eexType\u0022:\u0022";
    t_1044 = t_1052.eexType.kind;
    out_1031[0] += t_1044;
    out_1031[0] += "\u0022,\u0022code\u0022:";
    t_1045 = t_1052.code;
    jsonString_1009(t_1045, out_1031);
    out_1031[0] += "}";
  } else if (node_1030 instanceof Comment) {
    t_1053 = requireInstanceOf__287(node_1030, Comment);
    out_1031[0] += "{\u0022type\u0022:\u0022comment\u0022,\u0022content\u0022:";
    t_1046 = t_1053.content;
    jsonString_1009(t_1046, out_1031);
    out_1031[0] += "}";
  } else {
    out_1031[0] += "null";
  }
  return;
}
/**
 * @param {Document} doc_1069
 * @returns {string}
 */
export function renderJson(doc_1069) {
  const out_1070 = [""];
  out_1070[0] += "{\u0022type\u0022:\u0022document\u0022,\u0022children\u0022:[";
  let first_1071 = true;
  let t_1072 = doc_1069.children;
  function fn_1073(child_1074) {
    if (! first_1071) {
      out_1070[0] += ",";
    }
    first_1071 = false;
    renderJsonNode_1029(child_1074, out_1070);
    return;
  }
  t_1072.forEach(fn_1073);
  out_1070[0] += "]}";
  return out_1070[0];
};
/**
 * @param {Document} doc_1075
 * @returns {string}
 */
export function renderToJson(doc_1075) {
  return renderJson(doc_1075);
};
/**
 * @param {string} input_1076
 * @returns {string}
 */
export function parseAndRender(input_1076) {
  let doc_1077;
  doc_1077 = parse(input_1076);
  return renderHtml(doc_1077);
};
/**
 * @param {string} input_1078
 * @returns {boolean}
 */
export function parseAndValidate(input_1078) {
  parse(input_1078);
  return true;
};
/** @type {string} */
export const VERSION = "0.1.0";
/** @type {string} */
export const NAME = "heex";
/**
 * @param {number} c_1079
 * @returns {boolean}
 */
export function isUpper(c_1079) {
  let return_1080;
  if (c_1079 >= Chars_337.UPPER_A) {
    return_1080 = c_1079 <= Chars_337.UPPER_Z;
  } else {
    return_1080 = false;
  }
  return return_1080;
};
