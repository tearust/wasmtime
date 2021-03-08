(function() {var implementors = {};
implementors["cranelift_codegen"] = [{"text":"impl PartialOrd&lt;DataValue&gt; for DataValue","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Block&gt; for Block","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Value&gt; for Value","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Inst&gt; for Inst","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;StackSlot&gt; for StackSlot","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;GlobalValue&gt; for GlobalValue","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Constant&gt; for Constant","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Immediate&gt; for Immediate","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;JumpTable&gt; for JumpTable","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;FuncRef&gt; for FuncRef","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;SigRef&gt; for SigRef","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Heap&gt; for Heap","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Table&gt; for Table","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;AnyEntity&gt; for AnyEntity","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Ieee32&gt; for Ieee32","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Ieee64&gt; for Ieee64","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;MachLabel&gt; for MachLabel","synthetic":false,"types":[]}];
implementors["cranelift_codegen_meta"] = [{"text":"impl PartialOrd&lt;DefIndex&gt; for DefIndex","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;VarIndex&gt; for VarIndex","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;OpcodeNumber&gt; for OpcodeNumber","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;InstructionPredicateNumber&gt; for InstructionPredicateNumber","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;EncodingRecipeNumber&gt; for EncodingRecipeNumber","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;RegBankIndex&gt; for RegBankIndex","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;RegClassIndex&gt; for RegClassIndex","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;TransformGroupIndex&gt; for TransformGroupIndex","synthetic":false,"types":[]}];
implementors["cranelift_entity"] = [{"text":"impl&lt;T:&nbsp;PartialOrd + ReservedValue&gt; PartialOrd&lt;PackedOption&lt;T&gt;&gt; for PackedOption&lt;T&gt;","synthetic":false,"types":[]}];
implementors["cranelift_interpreter"] = [{"text":"impl PartialOrd&lt;FuncIndex&gt; for FuncIndex","synthetic":false,"types":[]}];
implementors["cranelift_module"] = [{"text":"impl PartialOrd&lt;FuncId&gt; for FuncId","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;DataId&gt; for DataId","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;FuncOrDataId&gt; for FuncOrDataId","synthetic":false,"types":[]}];
implementors["cranelift_wasm"] = [{"text":"impl PartialOrd&lt;FuncIndex&gt; for FuncIndex","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;DefinedFuncIndex&gt; for DefinedFuncIndex","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;DefinedTableIndex&gt; for DefinedTableIndex","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;DefinedMemoryIndex&gt; for DefinedMemoryIndex","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;DefinedGlobalIndex&gt; for DefinedGlobalIndex","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;TableIndex&gt; for TableIndex","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;GlobalIndex&gt; for GlobalIndex","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;MemoryIndex&gt; for MemoryIndex","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;SignatureIndex&gt; for SignatureIndex","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;DataIndex&gt; for DataIndex","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;ElemIndex&gt; for ElemIndex","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;TypeIndex&gt; for TypeIndex","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;ModuleIndex&gt; for ModuleIndex","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;InstanceIndex&gt; for InstanceIndex","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;EventIndex&gt; for EventIndex","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;ModuleTypeIndex&gt; for ModuleTypeIndex","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;InstanceTypeIndex&gt; for InstanceTypeIndex","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;EntityIndex&gt; for EntityIndex","synthetic":false,"types":[]}];
implementors["peepmatic_automata"] = [{"text":"impl PartialOrd&lt;State&gt; for State","synthetic":false,"types":[]}];
implementors["peepmatic_runtime"] = [{"text":"impl PartialOrd&lt;Else&gt; for Else","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;LhsId&gt; for LhsId","synthetic":false,"types":[]}];
implementors["peepmatic_test"] = [{"text":"impl PartialOrd&lt;Instruction&gt; for Instruction","synthetic":false,"types":[]}];
implementors["proc_macro2"] = [{"text":"impl PartialOrd&lt;Ident&gt; for Ident","synthetic":false,"types":[]}];
implementors["syn"] = [{"text":"impl PartialOrd&lt;Lifetime&gt; for Lifetime","synthetic":false,"types":[]}];
implementors["wasi_common"] = [{"text":"impl PartialOrd&lt;DirCaps&gt; for DirCaps","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;FdFlags&gt; for FdFlags","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;OFlags&gt; for OFlags","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;FileCaps&gt; for FileCaps","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;RwEventFlags&gt; for RwEventFlags","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Rights&gt; for Rights","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Fdflags&gt; for Fdflags","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Fstflags&gt; for Fstflags","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Lookupflags&gt; for Lookupflags","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Oflags&gt; for Oflags","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Eventrwflags&gt; for Eventrwflags","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Subclockflags&gt; for Subclockflags","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Riflags&gt; for Riflags","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Roflags&gt; for Roflags","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Sdflags&gt; for Sdflags","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Rights&gt; for Rights","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Fdflags&gt; for Fdflags","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Fstflags&gt; for Fstflags","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Lookupflags&gt; for Lookupflags","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Oflags&gt; for Oflags","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Eventrwflags&gt; for Eventrwflags","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Subclockflags&gt; for Subclockflags","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Riflags&gt; for Riflags","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Roflags&gt; for Roflags","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Sdflags&gt; for Sdflags","synthetic":false,"types":[]}];
implementors["wiggle_test"] = [{"text":"impl PartialOrd&lt;MemArea&gt; for MemArea","synthetic":false,"types":[]}];
implementors["witx"] = [{"text":"impl PartialOrd&lt;SizeAlign&gt; for SizeAlign","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()