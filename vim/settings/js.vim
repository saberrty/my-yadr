let javascript_enable_domhtmlcss = 0
let javascript_ignore_javaScriptdoc = 0
let g:javascript_conceal=0
let b:javascript_fold=1

function! IndexComponentSwitch()
  let b:filename=expand('%')
  if b:filename =~ 'index\.js$'
    execute 'edit' substitute(b:filename, "index.js", "component.js", "")
  else
    execute 'edit' substitute(b:filename, "component.js", "index.js", "")
  endif
endfunction

au FileType javascript nmap <leader>s :call IndexComponentSwitch()<cr>

let g:javascript_conceal_function             = "ƒ"
let g:javascript_conceal_null                 = "ø"
let g:javascript_conceal_this                 = "@"
let g:javascript_conceal_return               = "⇚"
let g:javascript_conceal_undefined            = "¿"
let g:javascript_conceal_NaN                  = "ℕ"
let g:javascript_conceal_prototype            = "¶"
let g:javascript_conceal_static               = "•"
let g:javascript_conceal_super                = "Ω"
let g:javascript_conceal_arrow_function       = "⇒"
let g:javascript_conceal_noarg_arrow_function = "🞅"
let g:javascript_conceal_underscore_arrow_function = "🞅"
map <leader>c :exec &conceallevel ? "set conceallevel=0" : "set conceallevel=1"<CR>
