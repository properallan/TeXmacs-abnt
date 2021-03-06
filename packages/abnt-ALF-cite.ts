<TeXmacs|2.1.1>

<style|source>

<\body>
  <active*|<\src-title>
    <src-package|cite-author-year|1.0>

    <\src-purpose>
      This package contains extended macros for citations and provides a
      <TeXmacs> counterpart for the natbib package.
    </src-purpose>

    <src-copyright|2006|Joris van der Hoeven>

    <\src-license>
      This software falls under the <hlink|GNU general public license,
      version 3 or later|$TEXMACS_PATH/LICENSE>. It comes WITHOUT ANY
      WARRANTY WHATSOEVER. You should have received a copy of the license
      which the software. If not, see <hlink|http://www.gnu.org/licenses/gpl-3.0.html|http://www.gnu.org/licenses/gpl-3.0.html>.
    </src-license>
  </src-title>>

  <use-module|(text text-natbib)>

  <\active*>
    <\src-comment>
      Helper macros
    </src-comment>
  </active*>

  <assign|bib-prefix|bib>

  <assign|with-bib|<macro|bib|body|<with|bib-prefix|<arg|bib>|<arg|body>>>>

  \;

  <assign|natbib-triple|<macro|full|short|year|<arg|short>
  (<arg|year>)<arg|full>>>

  <assign|natbib-author|<macro|text|<extern|natbib-get|<arg|text>|author>>>

  <assign|natbib-year|<macro|text|<extern|natbib-get|<arg|text>|year>>>

  <assign|natbib-author*|<macro|text|<extern|natbib-get|<arg|text>|author*>>>

  \;

  <assign|cite-add|<macro|key|<write|<value|bib-prefix>|<arg|key>>>>

  <assign|cite-data|<macro|key|<get-binding|<merge|<value|bib-prefix>|-|<arg|key>>>>>

  <assign|cite-link|<macro|key|text|<style-with|src-compact|none|<locus|<id|<hard-id|<arg|key>>>|<link|hyperlink|<id|<hard-id|<arg|key>>>|<url|<merge|#|<value|bib-prefix>|-|<arg|key>>>>|<arg|text>>>>>

  <\active*>
    <\src-comment>
      Default presentation
    </src-comment>
  </active*>

  <assign|render-cite|<macro|x|(<arg|x>)>>

  <active*|<src-short-comment|The LaTeX standard actually uses brackets ( )
  instead>>

  <assign|cite-sep|<macro|; >>

  <assign|natbib-show|<macro|nr|text|<natbib-author*|<arg|text>><if|<equal|<natbib-year|<arg|text>>|?>||,
  <natbib-year|<arg|text>>>>>

  <assign|natbib-bind|<macro|nr|text|<arg|text>>>

  <active*|<src-short-comment|Use nr argument instead for short style
  references>>

  <\active*>
    <\src-comment>
      Main commands for citations
    </src-comment>
  </active*>

  <assign|cite-author|<macro|key|<cite-add|<arg|key>><natbib-author|<cite-data|<arg|key>>>>>

  <assign|cite-year|<macro|key|<cite-add|<arg|key>><natbib-year|<cite-data|<arg|key>>>>>

  <assign|cite-author*|<macro|key|<cite-add|<arg|key>><natbib-author*|<cite-data|<arg|key>>>>>

  <assign|cite-author-year|<macro|key|<cite-author|<arg|key>><if|<equal|<natbib-year|<cite-data|<arg|key>>>|?>||,
  <cite-year|<arg|key>>>>>

  <assign|cite-author*-year|<macro|key|<cite-author*|<arg|key>><if|<equal|<natbib-year|<cite-data|<arg|key>>>|?>||,
  <cite-year|<arg|key>>>>>

  <assign|cite-author-year*|<macro|key|<cite-author|<arg|key>><if|<equal|<natbib-year|<cite-data|<arg|key>>>|?>||
  <render-citep|<cite-year|<arg|key>>>>>>

  <assign|cite-author*-year*|<macro|key|<cite-author*|<arg|key>><if|<equal|<natbib-year|<cite-data|<arg|key>>>|?>||
  <render-cite|<cite-year|<arg|key>>>>>>

  \;

  <assign|cite-author-link|<macro|key|<cite-link|<arg|key>|<cite-author|<arg|key>>>>>

  <assign|cite-year-link|<macro|key|<cite-link|<arg|key>|<cite-year|<arg|key>>>>>

  <assign|cite-author*-link|<macro|key|<cite-link|<arg|key>|<cite-author*|<arg|key>>>>>

  \;

  <assign|cite-raw-1|<macro|key|<cite-link|<arg|key>|<cite-author-year|<arg|key>>>>>

  <assign|cite-raw+|<macro|key|<cite-sep><cite-raw-1|<arg|key>>>>

  <assign|cite-raw|<xmacro|x|<cite-raw-1|<arg|x|0>><map-args|cite-raw+|concat|x|1>>>

  <assign|cite-raw*-1|<macro|key|<cite-link|<arg|key>|<cite-author*-year|<arg|key>>>>>

  <assign|cite-raw*+|<macro|key|<cite-sep><cite-raw*-1|<arg|key>>>>

  <assign|cite-raw*|<xmacro|x|<cite-raw*-1|<arg|x|0>><map-args|cite-raw*+|concat|x|1>>>

  \;

  <assign|cite-textual-1|<macro|key|<cite-link|<arg|key>|<cite-author-year*|<arg|key>>>>>

  <assign|cite-textual+|<macro|key|<cite-sep><cite-textual-1|<arg|key>>>>

  <assign|cite-textual|<xmacro|x|<cite-textual-1|<arg|x|0>><map-args|cite-textual+|concat|x|1>>>

  <assign|cite-textual*-1|<macro|key|<cite-link|<arg|key>|<cite-author*-year*|<arg|key>>>>>

  <assign|cite-textual*+|<macro|key|<cite-sep><cite-textual*-1|<arg|key>>>>

  <assign|cite-textual*|<xmacro|x|<cite-textual*-1|<arg|x|0>><map-args|cite-textual*+|concat|x|1>>>

  \;

  <assign|cite|<xmacro|x|<with|font-shape|small-caps|<render-cite|<cite-raw-1|<arg|x|0>><map-args|cite-raw+|concat|x|1>>>>>

  <assign|cite*|<xmacro|x|<render-cite|<cite-raw*-1|<arg|x|0>><map-args|cite-raw*+|concat|x|1>>>>

  <assign|cite-detail|<macro|key|details|<render-cite-detail|<cite-raw-1|<arg|key>>|<arg|details>>>>

  <assign|cite-parenthesized|<value|cite>>

  <assign|cite-parenthesized*|<value|cite*>>

  \;

  <assign|bibitem*|<macro|text|<style-with|src-compact|none|<assign|bibitem-nr|<plus|<value|bibitem-nr>|1>><with|font-shape|small-caps|<render-bibitem|<transform-bibitem|<natbib-show|<value|bibitem-nr>|<value|bibitem-nr>>>>><set-binding|<natbib-bind|<value|bibitem-nr>|<arg|text>>>>>>

  \;

  <\src-comment>
    This is the original piece of code to generate the bibliography with
    bibkeys to enumerate the bibliography list.

    <assign|bibitem*|<macro|text|<style-with|src-compact|none|<assign|bibitem-nr|<plus|<value|bibitem-nr>|1>><with|font-shape|small-caps|<render-bibitem|<transform-bibitem|<natbib-show|<value|bibitem-nr>|<arg|text>>>>><set-binding|<natbib-bind|<value|bibitem-nr>|<arg|text>>>>>>

    \;
  </src-comment>

  <\active*>
    <\src-comment>
      Extra macros
    </src-comment>
  </active*>

  <assign|natexlab|<macro|x|<em|<arg|x>>>>

  <assign|render-citep|<macro|x|(<arg|x>)>>

  <assign|citep|<xmacro|x|<with|font-shape|small-caps|<render-citep|<cite-raw-1|<arg|x|0>><map-args|cite-raw+|concat|x|1>>>>>

  <assign|citep*|<xmacro|x|<render-citep|<cite-raw*-1|<arg|x|0>><map-args|cite-raw*+|concat|x|1>>>>

  <assign|citet|<value|cite-textual>>

  <assign|citet*|<value|cite-textual*>>
</body>

<\initial>
  <\collection>
    <associate|preamble|true>
  </collection>
</initial>