(function() {var type_impls = {
"parquet":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-GenericColumnReader%3CRepetitionLevelDecoderImpl,+DefinitionLevelDecoderImpl,+V%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/parquet/column/reader.rs.html#131-153\">source</a><a href=\"#impl-GenericColumnReader%3CRepetitionLevelDecoderImpl,+DefinitionLevelDecoderImpl,+V%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;V&gt; <a class=\"struct\" href=\"parquet/column/reader/struct.GenericColumnReader.html\" title=\"struct parquet::column::reader::GenericColumnReader\">GenericColumnReader</a>&lt;<a class=\"struct\" href=\"parquet/column/reader/decoder/struct.RepetitionLevelDecoderImpl.html\" title=\"struct parquet::column::reader::decoder::RepetitionLevelDecoderImpl\">RepetitionLevelDecoderImpl</a>, <a class=\"struct\" href=\"parquet/column/reader/decoder/struct.DefinitionLevelDecoderImpl.html\" title=\"struct parquet::column::reader::decoder::DefinitionLevelDecoderImpl\">DefinitionLevelDecoderImpl</a>, V&gt;<div class=\"where\">where\n    V: <a class=\"trait\" href=\"parquet/column/reader/decoder/trait.ColumnValueDecoder.html\" title=\"trait parquet::column::reader::decoder::ColumnValueDecoder\">ColumnValueDecoder</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method\"><a class=\"src rightside\" href=\"src/parquet/column/reader.rs.html#136-152\">source</a><h4 class=\"code-header\">pub fn <a href=\"parquet/column/reader/struct.GenericColumnReader.html#tymethod.new\" class=\"fn\">new</a>(descr: <a class=\"type\" href=\"parquet/schema/types/type.ColumnDescPtr.html\" title=\"type parquet::schema::types::ColumnDescPtr\">ColumnDescPtr</a>, page_reader: <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"parquet/column/page/trait.PageReader.html\" title=\"trait parquet::column::page::PageReader\">PageReader</a>&gt;) -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Creates new column reader based on column descriptor and page reader.</p>\n</div></details></div></details>",0,"parquet::column::reader::ColumnReaderImpl"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-GenericColumnReader%3CR,+D,+V%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/parquet/column/reader.rs.html#155-566\">source</a><a href=\"#impl-GenericColumnReader%3CR,+D,+V%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;R, D, V&gt; <a class=\"struct\" href=\"parquet/column/reader/struct.GenericColumnReader.html\" title=\"struct parquet::column::reader::GenericColumnReader\">GenericColumnReader</a>&lt;R, D, V&gt;<div class=\"where\">where\n    R: <a class=\"trait\" href=\"parquet/column/reader/decoder/trait.RepetitionLevelDecoder.html\" title=\"trait parquet::column::reader::decoder::RepetitionLevelDecoder\">RepetitionLevelDecoder</a>,\n    D: <a class=\"trait\" href=\"parquet/column/reader/decoder/trait.DefinitionLevelDecoder.html\" title=\"trait parquet::column::reader::decoder::DefinitionLevelDecoder\">DefinitionLevelDecoder</a>,\n    V: <a class=\"trait\" href=\"parquet/column/reader/decoder/trait.ColumnValueDecoder.html\" title=\"trait parquet::column::reader::decoder::ColumnValueDecoder\">ColumnValueDecoder</a>,</div></h3></section></summary><div class=\"impl-items\"><section id=\"method.new_with_decoders\" class=\"method\"><a class=\"src rightside\" href=\"src/parquet/column/reader.rs.html#161-178\">source</a><h4 class=\"code-header\">pub(crate) fn <a href=\"parquet/column/reader/struct.GenericColumnReader.html#tymethod.new_with_decoders\" class=\"fn\">new_with_decoders</a>(\n    descr: <a class=\"type\" href=\"parquet/schema/types/type.ColumnDescPtr.html\" title=\"type parquet::schema::types::ColumnDescPtr\">ColumnDescPtr</a>,\n    page_reader: <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"parquet/column/page/trait.PageReader.html\" title=\"trait parquet::column::page::PageReader\">PageReader</a>&gt;,\n    values_decoder: V,\n    def_level_decoder: <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;D&gt;,\n    rep_level_decoder: <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;R&gt;\n) -&gt; Self</h4></section><details class=\"toggle method-toggle\" open><summary><section id=\"method.read_batch\" class=\"method\"><a class=\"src rightside\" href=\"src/parquet/column/reader.rs.html#193-203\">source</a><h4 class=\"code-header\">pub fn <a href=\"parquet/column/reader/struct.GenericColumnReader.html#tymethod.read_batch\" class=\"fn\">read_batch</a>(\n    &amp;mut self,\n    batch_size: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>,\n    def_levels: <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&amp;mut D::<a class=\"associatedtype\" href=\"parquet/column/reader/decoder/trait.ColumnLevelDecoder.html#associatedtype.Buffer\" title=\"type parquet::column::reader::decoder::ColumnLevelDecoder::Buffer\">Buffer</a>&gt;,\n    rep_levels: <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&amp;mut R::<a class=\"associatedtype\" href=\"parquet/column/reader/decoder/trait.ColumnLevelDecoder.html#associatedtype.Buffer\" title=\"type parquet::column::reader::decoder::ColumnLevelDecoder::Buffer\">Buffer</a>&gt;,\n    values: &amp;mut V::<a class=\"associatedtype\" href=\"parquet/column/reader/decoder/trait.ColumnValueDecoder.html#associatedtype.Buffer\" title=\"type parquet::column::reader::decoder::ColumnValueDecoder::Buffer\">Buffer</a>\n) -&gt; <a class=\"type\" href=\"parquet/errors/type.Result.html\" title=\"type parquet::errors::Result\">Result</a>&lt;(<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>)&gt;</h4></section><span class=\"item-info\"><div class=\"stab deprecated\"><span class=\"emoji\">👎</span><span>Deprecated: Use read_records</span></div></span></summary><div class=\"docblock\"><p>Reads a batch of values of at most <code>batch_size</code>, returning a tuple containing the\nactual number of non-null values read, followed by the corresponding number of levels,\ni.e, the total number of values including nulls, empty lists, etc…</p>\n<p>If the max definition level is 0, <code>def_levels</code> will be ignored, otherwise it will be\npopulated with the number of levels read, with an error returned if it is <code>None</code>.</p>\n<p>If the max repetition level is 0, <code>rep_levels</code> will be ignored, otherwise it will be\npopulated with the number of levels read, with an error returned if it is <code>None</code>.</p>\n<p><code>values</code> will be contiguously populated with the non-null values. Note that if the column\nis not required, this may be less than either <code>batch_size</code> or the number of levels read</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.read_records\" class=\"method\"><a class=\"src rightside\" href=\"src/parquet/column/reader.rs.html#219-289\">source</a><h4 class=\"code-header\">pub fn <a href=\"parquet/column/reader/struct.GenericColumnReader.html#tymethod.read_records\" class=\"fn\">read_records</a>(\n    &amp;mut self,\n    max_records: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>,\n    def_levels: <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&amp;mut D::<a class=\"associatedtype\" href=\"parquet/column/reader/decoder/trait.ColumnLevelDecoder.html#associatedtype.Buffer\" title=\"type parquet::column::reader::decoder::ColumnLevelDecoder::Buffer\">Buffer</a>&gt;,\n    rep_levels: <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&amp;mut R::<a class=\"associatedtype\" href=\"parquet/column/reader/decoder/trait.ColumnLevelDecoder.html#associatedtype.Buffer\" title=\"type parquet::column::reader::decoder::ColumnLevelDecoder::Buffer\">Buffer</a>&gt;,\n    values: &amp;mut V::<a class=\"associatedtype\" href=\"parquet/column/reader/decoder/trait.ColumnValueDecoder.html#associatedtype.Buffer\" title=\"type parquet::column::reader::decoder::ColumnValueDecoder::Buffer\">Buffer</a>\n) -&gt; <a class=\"type\" href=\"parquet/errors/type.Result.html\" title=\"type parquet::errors::Result\">Result</a>&lt;(<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>)&gt;</h4></section></summary><div class=\"docblock\"><p>Read up to <code>max_records</code> whole records, returning the number of complete\nrecords, non-null values and levels decoded. All levels for a given record\nwill be read, i.e. the next repetition level, if any, will be 0</p>\n<p>If the max definition level is 0, <code>def_levels</code> will be ignored and the number of records,\nnon-null values and levels decoded will all be equal, otherwise <code>def_levels</code> will be\npopulated with the number of levels read, with an error returned if it is <code>None</code>.</p>\n<p>If the max repetition level is 0, <code>rep_levels</code> will be ignored and the number of records\nand levels decoded will both be equal, otherwise <code>rep_levels</code> will be populated with\nthe number of levels read, with an error returned if it is <code>None</code>.</p>\n<p><code>values</code> will be contiguously populated with the non-null values. Note that if the column\nis not required, this may be less than either <code>max_records</code> or the number of levels read</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.skip_records\" class=\"method\"><a class=\"src rightside\" href=\"src/parquet/column/reader.rs.html#296-391\">source</a><h4 class=\"code-header\">pub fn <a href=\"parquet/column/reader/struct.GenericColumnReader.html#tymethod.skip_records\" class=\"fn\">skip_records</a>(&amp;mut self, num_records: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>) -&gt; <a class=\"type\" href=\"parquet/errors/type.Result.html\" title=\"type parquet::errors::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Skips over <code>num_records</code> records, where records are delimited by repetition levels of 0</p>\n<h5 id=\"returns\"><a href=\"#returns\">Returns</a></h5>\n<p>Returns the number of records skipped</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.read_dictionary_page\" class=\"method\"><a class=\"src rightside\" href=\"src/parquet/column/reader.rs.html#395-409\">source</a><h4 class=\"code-header\">fn <a href=\"parquet/column/reader/struct.GenericColumnReader.html#tymethod.read_dictionary_page\" class=\"fn\">read_dictionary_page</a>(&amp;mut self) -&gt; <a class=\"type\" href=\"parquet/errors/type.Result.html\" title=\"type parquet::errors::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Read the next page as a dictionary page. If the next page is not a dictionary page,\nthis will return an error.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.read_new_page\" class=\"method\"><a class=\"src rightside\" href=\"src/parquet/column/reader.rs.html#413-547\">source</a><h4 class=\"code-header\">fn <a href=\"parquet/column/reader/struct.GenericColumnReader.html#tymethod.read_new_page\" class=\"fn\">read_new_page</a>(&amp;mut self) -&gt; <a class=\"type\" href=\"parquet/errors/type.Result.html\" title=\"type parquet::errors::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Reads a new page and set up the decoders for levels, values or dictionary.\nReturns false if there’s no page left.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.has_next\" class=\"method\"><a class=\"src rightside\" href=\"src/parquet/column/reader.rs.html#553-565\">source</a><h4 class=\"code-header\">pub(crate) fn <a href=\"parquet/column/reader/struct.GenericColumnReader.html#tymethod.has_next\" class=\"fn\">has_next</a>(&amp;mut self) -&gt; <a class=\"type\" href=\"parquet/errors/type.Result.html\" title=\"type parquet::errors::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Check whether there is more data to read from this column,\nIf the current page is fully decoded, this will load the next page\n(if it exists) into the buffer</p>\n</div></details></div></details>",0,"parquet::arrow::record_reader::ColumnReader","parquet::column::reader::ColumnReaderImpl"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()