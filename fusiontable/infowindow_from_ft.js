{template .contents}
  <div class='googft-info-window'>
    <b>{$data.value.nome}</b><br>
    <br>
    {$data.value.indirizzo} {$data.value['numero-civico']}, {$data.value.cap}<br>
    {if $data.value.quartiere}(quartiere "{$data.value.quartiere}")<br>{/if}
    <br>
    {if $data.value.telefono}<i>tel:</i> {$data.value.telefono}<br>{/if}
    {if $data.value.mobile}<i>cell:</i> {$data.value.mobile}<br>{/if}
    
    {if $data.value.web}<br><a href={$data.value.web} target="_blank">{$data.value.web}</a><br>{/if}
    {if $data.value.email}<a href=mailto:{$data.value.email}>{$data.value.email}</a><br>{/if}
    
    {if $data.value['tipi'] == 'accoglienza'}
      <br>
      <i>{$data.value['tipi-specifici']} a {$data.value['accoglienza#stelle']} {if $data.value['accoglienza#stelle'] >1}stelle{else}stella{/if}</i><br>
    {/if}    
    
    {if $data.value['tipi'] == 'ristoro'}
      <br>
      <i>{$data.value['tipi-specifici']} {if $data.value['divertimento-e-ristoro#cucina']}con particolare cucina {$data.value['divertimento-e-ristoro#cucina']}{/if}</i>
    {/if}
  </div>
{/template}