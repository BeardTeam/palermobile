{template .contents}
<div class='googft-card-view' style='font-family: sans-serif; width: 450px; padding-left: 1px; border: 1px solid #ccc; overflow: hidden'>
<h2>{$data.value.nome}</h2>
<div>
<b>Contatti</b><br>
{if $data.value.telefono}<div><i>tel:</i> {$data.value.telefono}<div>{/if}
{if $data.value.mobile}<div><i>mobile:</i> {$data.value.mobile}<div>{/if}
{if $data.value.fax}<div><i>fax:</i> {$data.value.fax}<div>{/if}
{if $data.value.email}<div><i>email:</i> <a href=mailto:{$data.value.email}>{$data.value.email}</a><div>{/if}
{if $data.value.web}<div><i>web:</i> <a href={$data.value.web} target='_blank'>{$data.value.web}</a><div>{/if}
</div>

<p>
<div>
<b>Indirizzo:</b> {$data.value.indirizzo} {$data.value['numero-civico']}, {$data.value.cap} {$data.value.citta} {if $data.value.quartiere}(quartiere {$data.value.quartiere}){/if}
</div>
</p>

</div>
{/template}