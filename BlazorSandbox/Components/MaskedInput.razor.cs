using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;
using System.Threading.Tasks;

namespace BlazorSandbox.Components
{
    public class MaskedInputBase : ComponentBase
    {
        public ElementReference MaskedInputContainer;

        [Inject] protected IJSRuntime JSInterop { get; set; }

        [Parameter]
        public RenderFragment ChildContent { get; set; }

        protected override async Task OnAfterRenderAsync(bool firstRender)
        {
            if (firstRender)
            {
                //await JSInterop.InvokeAsync<string>("console.log", MaskedInputContainer);
                await JSInterop.InvokeAsync<string>("RunMaskedInput", MaskedInputContainer);
            }
        }
    }
}
