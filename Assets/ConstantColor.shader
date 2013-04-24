Shader "Custom/ConstantColor" {
	Properties {
		_Color ("Color (RGB)", Color) = (0.5, 0.5, 0.5, 0.5)
	}
	SubShader {
		Tags { "RenderType"="Opaque" }

		Pass {
			CGPROGRAM
	
			#pragma vertex vert
			#pragma fragment frag
			#include "UnityCG.cginc"

			fixed4 _Color;

			struct v2f {
				float4 pos : SV_POSITION;
			};

			v2f vert(appdata_base v) {
				v2f o;
				o.pos = mul (UNITY_MATRIX_MVP, v.vertex);
				return o;
			}

			fixed4 frag(v2f i) : COLOR0 {
				return _Color;
			}
			ENDCG
		}
	} 
}
